import { useEffect } from "react";
import { View } from "react-native";

import { SharedValue } from "react-native-reanimated";

import { theme } from "@/styles/theme";
import { styles } from "./styles";

type Props = {
  paginationIndex: number;
  images: Thumbnail[];
  scrollX: SharedValue<number>;
};

export function CarouselPagination({
  paginationIndex,
  images,
}: Props) {
  return (
    <View style={styles.container}>
      {images.map((_, index) => (
        <View
          key={`dot-${index}`}
          style={[
            styles.dot,
            {
              backgroundColor:
                paginationIndex === index ? theme.colors.dark : "#aaa",
            },
          ]}
        ></View>
      ))}
    </View>
  );
}
