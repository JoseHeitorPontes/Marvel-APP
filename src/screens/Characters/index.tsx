import { useEffect, useRef, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { api } from "@/services/api";
import { useDebounce } from "@/hooks/useDebounce";
import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { CharacterCard } from "@/components/CharacterCard";

import { styles } from "./styles";

export function Characters() {
    const navigation  = useNavigation<NativeScreens>();

    const isFirstRender = useRef(true);

    const offset = useRef<number>(0);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000);
    const [characterResponseData, setCharacterResponseData] = useState<ResponseDataCharacter>({} as ResponseDataCharacter);

    async function fetchCharacters(nameCharacter?: string) {
        try {
            const response = await api.get<ResponseDataCharacter>("/characters", {
                params: {
                    offset: offset.current,
                    ...(nameCharacter && { name: nameCharacter }),
                }
            });

            const newOffsetNumber = offset.current + 20;
            offset.current = newOffsetNumber;

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

    function LoadingContainer() {
        const totalCharacters = characterResponseData?.data?.total;
        const currentTotalCharacters = characterResponseData?.data?.results?.length

        const hasMoreCharacters = currentTotalCharacters > totalCharacters;

        if (hasMoreCharacters) {
            return null;
        }

        return <Loading />
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;

            return;
        }

        fetchCharacters(debouncedSearch);
    }, [debouncedSearch]);

    return (
        <View style={styles.container}>
            <Header showLogo />

            <View style={styles.containerSearch}>
                <TextInput style={styles.search} cursorColor="#000" placeholder="Search character name" onChangeText={setSearch} value={search} />
            </View>

            <FlatList
                numColumns={2}
                style={{ marginTop: 15 }}
                keyExtractor={(_, index) => `character-${index}`}
                data={characterResponseData?.data?.results}
                renderItem={({ item: character }) => <CharacterCard character={character} onPressButton={() => navigation.navigate("CharacterDetails", { character })} />}
                onEndReached={() => fetchCharacters()}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<LoadingContainer />}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: "space-around" }}
            />
        </View>
    );
}
