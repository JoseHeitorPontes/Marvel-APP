import { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { api } from "@/services/api";

import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";

import { styles } from "./styles";

type CharacterDetailsParams = {
    characterId: number;
    characterName: string;
};

export function CharacterDetails() {
    const navigation = useNavigation();
    const { params } = useRoute();
    const { characterId, characterName } = params as CharacterDetailsParams;

    const [isLoading, setIsLoading] = useState(true);
    const [characterResponseData, setCharacterResponseData] = useState<ResponseDataCharacter>({} as ResponseDataCharacter);

    const [selectedCharacter] = characterResponseData?.data?.results || [];
    const hasImageNotFound = selectedCharacter?.thumbnail?.path?.includes("image_not_available");
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

    function handleBack() {
        navigation.goBack();
    }

    useEffect(() => {
        getCharacter();
    }, []);

    return (
        <View style={styles.container}>
            <Header title={characterName} handleBack={handleBack} />

            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <Loading size={45} />
                </View>
            ) : (
                <View style={styles.detailsContainer}>
                    <Image  
                        style={styles.image}
                        {...(hasImageNotFound ? ({ source: require("@/img/image-not-found.png")}) : ({ source: { uri: characterImageUrl }}))}
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
            )}
        </View>
    );
}
