import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";
import { styles } from "./styles";

type Props = ActivityIndicatorProps;

export function Loading({
    ...rest
}: Props) {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#f0141e" size={30} {...rest} />
        </View>
    );
}
