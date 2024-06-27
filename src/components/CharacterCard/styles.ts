import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 215,
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    card: {
        height: "100%",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderColor: "#b30707",
        borderRadius: 5,
        backgroundColor: "#111",
    },
    title: {
        marginBottom: 10,
        color: "#fff",
    },
    image: {
        height: 90,
        width: 90,
        marginBottom: 10,
        borderRadius: 2,
    }
});
