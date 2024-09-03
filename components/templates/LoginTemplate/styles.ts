import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/FontSizes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: FontSizes.large,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: FontSizes.medium,
        color: Colors.textSecondary,
        marginBottom: 24,
    },
});

export default styles;
