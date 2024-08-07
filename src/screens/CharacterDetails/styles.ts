import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loadingContainer: {
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
    },
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
    },
    buttonsContainer: {
        width: "100%",
        paddingHorizontal: 15,
        display: "flex",
        flexDirection: "column",
        gap: 15,
    }
});
