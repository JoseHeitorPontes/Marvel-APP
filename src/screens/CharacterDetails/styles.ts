import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
    },
    image: {
        height: 225,
        width: 225,
        borderRadius: 2,
    },
    title: {
        fontSize: 20,
    },
    description: {
        paddingHorizontal: 15,
        fontSize: 15,
        textAlign: "justify"
    }
});
