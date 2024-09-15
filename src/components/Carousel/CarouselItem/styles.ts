import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 400,
    width: 250,
    borderRadius: 4,
  },
});
