import { Text, TouchableOpacity } from "react-native";

import styles from './styles';

type ButtonProps = {
    text: string;
    isLoading?: boolean;
    onPress: () => void;
}

export function Button({ text, onPress, isLoading = false }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {isLoading ? (<Text style={styles.text}>Carregando</Text>) : (<Text style={styles.text}>{text}</Text>)}
        </TouchableOpacity>
      );
}