import { useEffect, useState } from "react";
import { View, FlatList, TextInput } from "react-native";

import { api } from "../../services/api";
import { CharacterCard } from "../../components/CharacterCard";
import { styles } from "./styles";
import { Loading } from "../../components/Loading";

export function Characters({
    navigation
}) {
    const [characterResponseData, setCharacterResponseData] = useState<ResponseDataCharacter>({} as ResponseDataCharacter);

    async function fetchCharacters() {
        try {

            const response = await api.get<ResponseDataCharacter>("/characters", {
                params: {
                    offset: characterResponseData?.data?.offset + 20,
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
        fetchCharacters();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <TextInput style={styles.search} cursorColor="#000" placeholder="Search character name" />
            </View>

            <FlatList
                numColumns={2}
                style={{ marginTop: 15 }}
                keyExtractor={(character) => `character-${character.id}`}
                data={characterResponseData?.data?.results}
                renderItem={({ item: character }) => <CharacterCard character={character} onPressButton={() => navigation.navigate("CharacterDetails", { characterId: character.id })} />}
                onEndReached={fetchCharacters}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<Loading />}
            />
        </View>
    );
}
