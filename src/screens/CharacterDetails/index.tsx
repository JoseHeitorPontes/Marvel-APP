import { useEffect, useState } from "react";

import { View, Text, Image } from "react-native";

import { api } from "../../services/api";
import { styles } from "./styles";

export function CharacterDetails({
    route,
    navigation
}) {
    const [characterResponseData, setCharacterResponseData] = useState<ResponseDataCharacter>({} as ResponseDataCharacter);

    const [selectedCharacter] = characterResponseData?.data?.results || [];
    const characterImageUrl = `${selectedCharacter?.thumbnail?.path}.${selectedCharacter?.thumbnail?.extension}`;

    async function getCharacter() {
        try {
            const { data } = await api.get<ResponseDataCharacter>(`/characters/${route.params.characterId}`);

            setCharacterResponseData(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCharacter();
    }, []);

    return (
        <View style={styles.container}>
            <Image  
                style={styles.image}
                source={{ uri: characterImageUrl }}
            />

            <Text style={styles.title}>{selectedCharacter?.name}</Text>

            <Text style={styles.description}>{selectedCharacter?.description}</Text>
        </View>
    );
}
