import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
      marginTop: 8,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: Colors.primary,
    },
    text: {
      fontSize: FontSizes.medium,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
});

export default styles;