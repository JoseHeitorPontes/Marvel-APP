import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
  detailsContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  thumbnailContainer: {
    display: "flex",
    alignItems: "center",
  },
  thumbnail: {
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
  datesContainer: {
    width: "100%",
  },
  comicImageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
    marginBottom: 40,
  },
  comicImage: {
    height: 300,
    width: 195,
  },
});
