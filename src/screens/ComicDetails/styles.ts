import { StyleSheet } from "react-native";

import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    paddingBottom: 20,
  },
  thumbnailContainer: {
    display: "flex",
    alignItems: "center",
  },
  thumbnail: {
    height: 400,
    width: 250,
    borderRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  detailsContent: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 15,
  },
  description: {
    width: "100%",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "justify",
    color: theme.colors.dark,
  },
  modifiedDate: {
    color: "gray",
    fontSize: 15,
  },
  modifiedDateLabel: {
    color: theme.colors.dark,
    fontWeight: "700",
  },
  datesContainer: {
    width: "100%",
  },
  comicImageContainer: {
    justifyContent: "center",
    gap: 15,
    marginBottom: 40,
  },
});
