import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#f0141e" size={30} />
        </View>
    );
}
