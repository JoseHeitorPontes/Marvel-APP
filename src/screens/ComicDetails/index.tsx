import { useEffect, useRef } from "react";
import { View, ScrollView, Text, Image } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";

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

  comic.images.map((image) => console.log(image));

  return (
    <View style={styles.container}>
      <Header title={comic.title} handleBack={handleBack} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.detailsContainer}>
          <View style={styles.thumbnailContainer}>
            <Image style={styles.thumbnail} source={{ uri: comicImageUrl }} />
          </View>

          <Text style={styles.title}>{comic.title}</Text>

          <Text style={styles.description}>{comic.description}</Text>

          <Text style={styles.modifiedDate}>
            <Text style={styles.modifiedDateLabel}>Date of last change:</Text>{" "}
            {dayjs(comic.modified).format("MMMM D, YYYY")}
          </Text>

          <Text style={styles.title}>Images</Text>

          <View style={styles.comicImageContainer}>
            {comic.images.map((comicImage, index) => (
              <Image
                key={`comic-image-${index}`}
                style={styles.comicImage}
                source={{ uri: `${comicImage.path}.${comicImage.extension}` }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
