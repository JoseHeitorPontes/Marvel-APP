import { View, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = RectButtonProps & {
  comic: Comic;
};

export function ComicCard({ comic, ...rest }: Props) {
  const hasImageNotFound = comic.thumbnail.path.includes("image_not_available");
  const comicImageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <RectButton style={styles.card} {...rest}>
      <Image
        style={styles.image}
        {...(hasImageNotFound
          ? { source: require("@/img/image-not-found.png") }
          : { source: { uri: comicImageUrl } })}
      />

      <View style={styles.cardBody}>
        <Text style={styles.title} numberOfLines={1}>
          {comic.title}
        </Text>

        <Text style={styles.description} numberOfLines={7}>
          {comic.description || "No description."}
        </Text>
      </View>
    </RectButton>
  );
}
