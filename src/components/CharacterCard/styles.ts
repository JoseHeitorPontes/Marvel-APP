import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  card: {
    height: 225,
    width: "45%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: theme.colors.dark,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 20,
    borderWidth: 3.5,
  },
  title: {
    marginBottom: 10,
    color: theme.colors.light,
  },
  image: {
    height: 90,
    width: 90,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: theme.colors.light,
  },
});
