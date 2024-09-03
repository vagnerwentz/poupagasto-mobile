import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Colors } from "@/constants/Colors";

import styles from './styles';

type InputProps = {
	text: string;
	value: string;
	isFocused?: boolean;
	placeholder?: string;
	secureTextEntry?: boolean;
	onChangeText: (text: string) => void;
}

export function Input({ 
	text, 
	value,
	placeholder, 
	isFocused = false,
	secureTextEntry = false,
	onChangeText
}: InputProps) {
	const [focused, setFocused] = useState(false);
	
	return (
		<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
				<TextInput
					style={[styles.input, (focused && isFocused) && styles.focusedInput]}
					placeholder={placeholder}
					autoComplete="off"
					autoCapitalize="none"
					placeholderTextColor={Colors.textSecondary}
					value={value}
					onChangeText={onChangeText}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					secureTextEntry={secureTextEntry}
      			/>
		</View>
	)
}