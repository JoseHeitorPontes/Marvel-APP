import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 225,
        width: "45%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        backgroundColor: "#111",
        borderTopStartRadius: 20,
        borderBottomEndRadius: 20,
        borderWidth: 3.5,
    },
    title: {
        marginBottom: 10,
        color: "#fff",
    },
    image: {
        height: 90,
        width: 100,
        marginBottom: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: "#fff",
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: "#f0141e",
        borderRadius: 2.5,
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: "600",
        textTransform: "none",
        color: "#fff",
    },
});
