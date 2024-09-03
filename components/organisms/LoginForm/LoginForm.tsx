import React from "react";
import { View } from "react-native";
import { LoginFields } from "@/components/molecules/LoginFields/LoginFields";
import { SignUpPrompt } from "@/components/molecules/SignUpPrompt/SignUpPrompt";

import styles from "./styles";
import { SignInDto } from "@/contracts/types/SignInDto";

type LoginFormProps = {
  onLogin: (data: SignInDto) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  return (
    <View style={styles.container}>
      <LoginFields onLogin={onLogin} />
      <SignUpPrompt />
    </View>
  );
}
