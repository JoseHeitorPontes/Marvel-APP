import { View, Text, Image } from "react-native";

import { useRoute } from "@react-navigation/native";

import { Header } from "@/components/Header";

import { styles } from "./styles";

type ComicDetailsParams = {
    comic: Comic;
};

export function ComicDetails() {
    const { params } = useRoute();
    const { comic } = params as ComicDetailsParams;

    const comicImageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

    return (
        <View>
            <Header />

            <View>
                <Image style={styles.image} source={{ uri: comicImageUrl }} />
                <Text style={styles.title}>{comic.title}</Text>
                <Text style={styles.description}>{comic.description}</Text>
            </View>
        </View>
    );
}