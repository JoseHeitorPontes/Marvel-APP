import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 20,
    flexDirection: "column",
    gap: 15,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: 400,
    width: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    textAlign: "justify",
  },
  modifiedDate: {
    color: "gray",
    fontSize: 15,
  },
  modifiedDateLabel: {
    color: "#000",
    fontWeight: "700",
  },
});
