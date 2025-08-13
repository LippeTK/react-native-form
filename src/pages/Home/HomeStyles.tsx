import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "60%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formContainer: {
    alignItems: "center",
  },
  homeButton: {
    backgroundColor: "#8cd19d",
    paddingVertical: 5,
    paddingHorizontal: 40,
    width: "50%",
    borderRadius: 6,
  },
  backButton: {
    backgroundColor: "#8cd19d",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    width: "40%",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 22,
    color: "white",
    alignSelf: "center",
  },
  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 30,
  },
});
