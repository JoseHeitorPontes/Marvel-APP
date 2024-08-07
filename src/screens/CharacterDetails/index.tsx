import { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { useRoute } from "@react-navigation/native";

import { api } from "@/services/api";

import { Loading } from "@/components/Loading";

import { styles } from "./styles";

type CharacterDetailsParams = {
    characterId: number;
};

export function CharacterDetails() {
    const { params } = useRoute();
    const { characterId } = params as CharacterDetailsParams;

    const [isLoading, setIsLoading] = useState(true);
    const [characterResponseData, setCharacterResponseData] = useState<ResponseDataCharacter>({} as ResponseDataCharacter);

    const [selectedCharacter] = characterResponseData?.data?.results || [];
    const characterImageUrl = `${selectedCharacter?.thumbnail?.path}.${selectedCharacter?.thumbnail?.extension}`;

    async function getCharacter() {
        try {
            setIsLoading(true);

            const { data } = await api.get<ResponseDataCharacter>(`/characters/${characterId}`);

            setCharacterResponseData(data);
        } catch(error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCharacter();
    }, []);

    return (
        isLoading ? (
            <View style={styles.loadingContainer}>
                <Loading size={45} />
            </View>
        ) : (
            <View style={styles.container}>
                <Image  
                    style={styles.image}
                    source={{ uri: characterImageUrl }}
                />

                <Text style={styles.title}>{selectedCharacter?.name}</Text>

                <Text style={styles.description}>{selectedCharacter?.description}</Text>

                <View style={styles.buttonsContainer}>
                    <Button title="COMICS" color="#f0141e" />
                    <Button title="EVENTS" color="#f0141e" />
                    <Button title="SERIES" color="#f0141e" />
                    <Button title="STORIES" color="#f0141e" />
                </View>
            </View>
        )
    );
}
