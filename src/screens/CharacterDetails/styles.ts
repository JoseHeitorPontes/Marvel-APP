import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    height: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  scrollView: {
    padding: 20,
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
    fontSize: 15,
    fontWeight: "600",
    textAlign: "justify",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 15,
  },
});
