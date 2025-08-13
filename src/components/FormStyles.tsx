import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  inputStyles: {
    borderColor: "#D3D3D3",
    borderWidth: 1,
    height: 40,
    width: 300,
    marginBottom: 20,
    borderRadius: 6,
  },
  inputTextStyles: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "500",
  },
  textareaStyles: {
    borderColor: "#D3D3D3",
    borderWidth: 1,
    height: 120, // maior altura
    width: 300,
    marginBottom: 20,
    borderRadius: 6,
    textAlignVertical: "top", // importante para multiline no Android
    padding: 8,
  },
  titleStyles: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 40,
  },
});
