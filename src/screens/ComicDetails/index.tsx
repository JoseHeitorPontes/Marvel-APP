import { View, ScrollView, Text, Image } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";

import { NativeScreens } from "@/routes/app.routes";

import { Header } from "@/components/Header";

import { styles } from "./styles";
import { Carousel } from "@/components/Carousel";

type ComicDetailsParams = {
  comic: Comic;
};

export function ComicDetails() {
  const navigation = useNavigation<NativeScreens>();
  const { params } = useRoute();
  const { comic } = params as ComicDetailsParams;

  const thumbnailUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const filteredImages = comic.images
    .filter((image) => image.path !== comic.thumbnail.path)
    .slice(0, 4);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header title={comic.title} handleBack={handleBack} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsContent}>
            <View style={styles.thumbnailContainer}>
              <Image style={styles.thumbnail} source={{ uri: thumbnailUrl }} />
            </View>

            <Text style={styles.title}>{comic.title}</Text>

            <Text style={styles.description}>
              {comic.description || "No description."}
            </Text>

            <View style={styles.datesContainer}>
              <Text style={styles.modifiedDate}>
                <Text style={styles.modifiedDateLabel}>
                  Date of last change:
                </Text>{" "}
                {dayjs(comic.modified).format("MMMM D, YYYY")}
              </Text>
            </View>
          </View>

          <Text style={styles.title}>Images</Text>

          <Carousel images={filteredImages} />
        </View>
      </ScrollView>
    </View>
  );
}
