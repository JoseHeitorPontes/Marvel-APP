import { Image, Dimensions } from "react-native";

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { styles } from "./styles";

type Props = {
  index: number;
  image: Thumbnail;
  scrollX: SharedValue<number>;
};

export function CarouselItem({ index, image, scrollX }: Props) {
  const imageUrl = `${image.path}.${image.extension}`;

  const { width } = Dimensions.get("screen");

  const rnAimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          scrollX.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [-width * 0.25, 0, width * 0.25],
          Extrapolation.CLAMP,
        ),
      },
      {
        scale: interpolate(
          scrollX.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [0.9, 1, 0.9],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, rnAimatedStyles]}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
    </Animated.View>
  );
}
