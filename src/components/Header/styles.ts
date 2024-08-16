import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        paddingTop: "8%",  
        paddingBottom: "4%",   
        paddingHorizontal: "4%",
        backgroundColor: "#111",
    },
    logoContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    image: {
        height: 40,
        width: 100,
    },
    title: {
        color: "#b30707",
        fontSize: 20
    },
});