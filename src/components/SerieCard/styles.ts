import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: theme.colors.dark,
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  cardBody: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: theme.colors.light,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: theme.colors.light,
    marginBottom: 5,
  },
  description: {
    textAlign: "justify",
    color: theme.colors.light,
  },
});
