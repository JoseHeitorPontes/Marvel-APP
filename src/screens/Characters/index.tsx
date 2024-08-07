import { useEffect, useRef, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { api } from "@/services/api";
import { useDebounce } from "@/hooks/useDebounce";
import { NativeScreens } from "@/routes/app.routes";

import { Loading } from "@/components/Loading";
import { CharacterCard } from "@/components/CharacterCard";

import { styles } from "./styles";

export function Characters() {
    const navigation  = useNavigation<NativeScreens>();

    const isFirstRender = useRef(true);

    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000);
    const [characterResponseData, setCharacterResponseData] = useState<ResponseDataCharacter>({} as ResponseDataCharacter);

    async function fetchCharacters() {
        try {
            const response = await api.get<ResponseDataCharacter>("/characters", {
                params: {
                    offset,
                    ...(debouncedSearch && { name: debouncedSearch }),
                }
            });

            setCharacterResponseData({
                ...response.data, 
                data: {
                    ...response.data.data,
                    results: [
                        ...(characterResponseData?.data?.results || []),
                        ...response.data.data.results,
                    ],
                }
            });
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;

            return;
        }

        fetchCharacters();
    }, [debouncedSearch, offset]);

    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <TextInput style={styles.search} cursorColor="#000" placeholder="Search character name" onChangeText={setSearch} value={search} />
            </View>

            <FlatList
                numColumns={2}
                style={{ marginTop: 15 }}
                keyExtractor={(character) => `character-${character.id}`}
                data={characterResponseData?.data?.results}
                renderItem={({ item: character }) => <CharacterCard character={character} onPressButton={() => navigation.navigate("CharacterDetails", { characterId: character.id })} />}
                onEndReached={() => setOffset(offset + 20)}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<Loading />}
            />
        </View>
    );
}
