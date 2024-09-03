import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export function SignUpPrompt() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Não tem uma conta?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crie a sua conta!</Text>
      </TouchableOpacity>
    </View>
  );
}
