import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  card: {
    height: 180,
    width: "100%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: theme.colors.dark,
    borderRadius: 5,
  },
  cardBody: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: theme.colors.light,
    textAlign: "justify",
    marginBottom: 5,
  },
  image: {
    height: 150,
    width: 97.5,
    borderWidth: 1,
    borderColor: theme.colors.light,
  },
  description: {
    width: "100%",
    textAlign: "justify",
    color: theme.colors.light,
  },
});
