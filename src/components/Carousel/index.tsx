import { useRef, useState } from "react";
import { ViewToken } from "react-native";

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { CarouselItem } from "./CarouselItem";
import { CarouselPagination } from "./CarouselPagination";

type Props = {
  images: Thumbnail[];
};

export function Carousel({ images }: Props) {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);

  const onScrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0]?.index !== undefined &&
      viewableItems[0]?.index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig,
      onViewableItemsChanged,
    },
  ]);

  return (
    <>
      <Animated.FlatList
        horizontal
        data={images}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item: image, index }) => (
          <CarouselItem index={index} image={image} scrollX={scrollX} />
        )}
        onScroll={onScrollHandle}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      <CarouselPagination
        paginationIndex={paginationIndex}
        images={images}
        scrollX={scrollX}
      />
    </>
  );
}
