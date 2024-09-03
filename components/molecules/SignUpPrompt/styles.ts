import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 16,
    },
    text: {
        fontSize: FontSizes.medium,
        color: Colors.textPrimary,
        marginBottom: 8,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: Colors.secondary,
    },
    buttonText: {
        fontSize: FontSizes.medium,
        color: Colors.buttonText,
        fontWeight: 'bold',
    },
});

export default styles;
