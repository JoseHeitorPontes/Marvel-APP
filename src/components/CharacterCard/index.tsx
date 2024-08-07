import { View, Image, Text, Button } from "react-native";
import { styles } from "./styles";

type Props = {
    character: Character;
    onPressButton: () => void;
};

export function CharacterCard({
    character,
    onPressButton,
}: Props) {
    const characterNames = character.name.split(" ");
    const [firstCharacterName, secondCharacterName] = characterNames;
    const formatedCharacterName = characterNames.length > 1 ?  `${firstCharacterName} ${secondCharacterName}` : firstCharacterName;

    const hasImageNotFound = character.thumbnail.path.includes("image_not_available");
    const characterImageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    {...(hasImageNotFound ? ({ source: require("../../../assets/image-not-found.png")}) : ({ source: { uri: characterImageUrl }}))}
                />

                <Text style={styles.title}>{character.name}</Text>

                <Button title="DETAILS" color="#f0141e" onPress={onPressButton} />
            </View>
        </View>
    );
}
