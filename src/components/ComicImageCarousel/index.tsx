import { View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

type Props = {
    images: Thumbnail[];
};

export function ComicImageCarousel({
    images,
}: Props) {
    return (
        <Carousel
            width={100}
            data={images}
            renderItem={({ item, index }) => <View style={{ height: 100, backgroundColor: "#333", flex: 1 }} />}
        />
    );
}