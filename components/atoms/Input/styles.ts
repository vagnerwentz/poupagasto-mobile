import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: FontSizes.large,
    marginBottom: 6,
    color: Colors.textPrimary,
  },
  input: {
    height: 56,
    backgroundColor: Colors.white,
    borderRadius: 5,
    color: Colors.textPrimary,
    padding: 8,
    fontSize: FontSizes.large,
    minWidth: '100%',
    textAlign: 'left',
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  focusedInput: {
    borderColor: Colors.success,
  },
});

export default styles;
