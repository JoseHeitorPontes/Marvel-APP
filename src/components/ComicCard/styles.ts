import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  card: {
    height: 180,
    width: "100%",
    flexDirection: "row",
    gap: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: theme.colors.dark,
    borderRadius: 5,
  },
  cardBody: {
    width: "62.5%",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: theme.colors.light,
    textAlign: "justify",
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 97.5,
    borderWidth: 1,
    borderColor: theme.colors.light,
  },
  description: {
    textAlign: "justify",
    color: theme.colors.light,
  },
});
