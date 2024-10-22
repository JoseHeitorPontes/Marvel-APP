import { View, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = RectButtonProps & {
  serie: Serie;
};

export function SerieCard({ serie, ...rest }: Props) {
  const hasImageNotFound = serie.thumbnail.path.includes("image_not_available");
  const serieImageUrl = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;

  return (
    <RectButton style={styles.card} {...rest}>
      <Text style={styles.title} numberOfLines={1}>
        {serie.title}
      </Text>

      <View style={styles.cardBody}>
        <Image
          style={styles.image}
          {...(hasImageNotFound
            ? { source: require("@/img/image-not-found.png") }
            : { source: { uri: serieImageUrl } })}
        />

        <Text style={styles.description} numberOfLines={5}>
          {serie.description || "No description."}
        </Text>
      </View>
    </RectButton>
  );
}
