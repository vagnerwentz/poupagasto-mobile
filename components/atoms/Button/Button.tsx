import { Text, TouchableOpacity } from "react-native";

import styles from './styles';

type ButtonProps = {
    text: string
    onPress: () => void;
}

export function Button({ text, onPress }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      );
}