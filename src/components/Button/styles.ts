import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f0141e",
    borderRadius: 2.5,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.light,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
