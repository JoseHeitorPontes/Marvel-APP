import { View, Text, Image } from "react-native";

import dayjs from "dayjs";
import { useNavigation, useRoute } from "@react-navigation/native";

import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";

import { styles } from "./styles";

type ComicDetailsParams = {
  comic: Comic;
};

export function ComicDetails() {
  const navigation = useNavigation<NativeScreens>();
  const { params } = useRoute();
  const { comic } = params as ComicDetailsParams;

  const comicImageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View>
      <Header title={comic.title} handleBack={handleBack} />

      <View style={styles.detailsContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: comicImageUrl }} />
        </View>

        <Text style={styles.title}>{comic.title}</Text>

        <Text style={styles.description}>{comic.description}</Text>

        <Text style={styles.modifiedDate}>
          <Text style={styles.modifiedDateLabel}>Date of last change:</Text>{" "}
          {dayjs(comic.modified).format("MMMM D, YYYY")}
        </Text>
      </View>
    </View>
  );
}
