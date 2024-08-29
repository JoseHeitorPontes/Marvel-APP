import { View, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = RectButtonProps & {
    comic: Comic;
};

export function ComicCard({
    comic,
    ...rest
}: Props) {
    const comicImageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

    return (
        <RectButton style={styles.container} {...rest}>
            <Image style={styles.image} source={{ uri: comicImageUrl }} />

            <View style={styles.contentContainer}>
                <Text style={styles.title} numberOfLines={1}>{comic.title}</Text>
                <Text style={styles.description} numberOfLines={5}>{comic.description || "No description."}</Text>
            </View>
        </RectButton>
    );
}