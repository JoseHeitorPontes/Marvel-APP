import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

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
            <Image
                style={styles.image}
                {...(hasImageNotFound ? ({ source: require("@/img/image-not-found.png")}) : ({ source: { uri: characterImageUrl }}))}
            />

            <Text style={styles.title}>{character.name}</Text>

            <RectButton style={styles.button} onPress={onPressButton}><Text style={styles.buttonTitle}>Details</Text></RectButton>
        </View>
    );
}
