import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: theme.colors.dark,
    borderRadius: 5,
  },
  contentContainer: {
    width: "72.5%",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: theme.colors.light,
    textAlign: "justify",
    marginBottom: 10,
  },
  description: {
    color: theme.colors.light,
    textAlign: "justify",
  },
  image: {
    height: 150,
    width: 97.5,
    borderWidth: 2,
    borderColor: theme.colors.light,
  },
});
