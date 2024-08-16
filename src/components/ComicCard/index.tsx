import { View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props = {
    comic: Comic;
};

export function ComicCard({
    comic,
}: Props) {
    const comicImageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: comicImageUrl }} />

            <View>
                <Text style={styles.title}>{comic.title}</Text>
                <Text style={styles.description}>{comic.description}</Text>
            </View>
        </View>
    );
}