import { View, Pressable, Text, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
    showLogo?: boolean;
    title?: string;
    handleBack?: () => void;
};

export function Header({
    showLogo,
    title,
    handleBack,
}: Props) {
    return (
        <View style={styles.container}>
            {handleBack && (
                <Pressable onPress={handleBack}>
                    <Ionicons name="chevron-back" size={32} color="#b30707" />
                </Pressable>
            )}

            {showLogo && (
                <Image style={styles.image} source={require("../../../assets/images/marvel.png")} />
            )}

            {title && (
                <Text style={styles.title}>{title}</Text>
            )}
        </View>
    );
}