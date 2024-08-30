import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    height: "100%",
  },
  loadingContainer: {
    height: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  image: {
    height: 225,
    width: 225,
    borderRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  description: {
    paddingHorizontal: 20,
    fontSize: 15,
    textAlign: "justify",
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "column",
    gap: 15,
  },
});
