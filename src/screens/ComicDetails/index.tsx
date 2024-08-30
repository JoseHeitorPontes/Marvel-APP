import { View, Text, Image } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";

import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";
import { ComicImageCarousel } from "@/components/ComicImageCarousel";

import { styles } from "./styles";
import { useRef } from "react";

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

  const ref = useRef(null);

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

        <Text style={styles.title}>Images</Text>

        <ComicImageCarousel images={comic.images} />
      </View>
    </View>
  );
}
