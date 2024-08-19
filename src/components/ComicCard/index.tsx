import { View, Text, Image, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
    comic: Comic;
};

export function ComicCard({
    comic,
    ...rest
}: Props) {
    const comicImageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

    return (
        <Pressable {...rest}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: comicImageUrl }} />

                <View style={styles.contentContainer}>
                    <Text style={styles.title} numberOfLines={1}>{comic.title}</Text>
                    <Text style={styles.description} numberOfLines={5}>{comic.description || "No description."}</Text>
                </View>
            </View>
        </Pressable>
    );
}