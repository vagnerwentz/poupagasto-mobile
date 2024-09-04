import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    errorMessageContainer: {
        borderRadius: 8,
        backgroundColor: Colors.gradientError,
        marginBottom: 8
    },
    errorMessage: {
        padding: 10,
        color: Colors.white,
        fontSize: FontSizes.medium,
    }
});

export default styles;