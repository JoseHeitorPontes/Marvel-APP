import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 10,
        flexDirection: "row",
        gap: 15,
        padding: 15,
        backgroundColor: "#111",
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
    },
    description: {
        color: "#fff",
        textAlign: "justify",
    },
    image: {
        height: 250,
        width: "30%",
    },
});
