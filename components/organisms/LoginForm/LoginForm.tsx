import React from "react";
import { View } from "react-native";
import { LoginFields } from "@/components/molecules/LoginFields/LoginFields";
import { SignUpPrompt } from "@/components/molecules/SignUpPrompt/SignUpPrompt";

import styles from "./styles";
import { SignInDto } from "@/contracts/types/SignInDto";

type LoginFormProps = {
  isLoading?: boolean;
  errorMessage: string;
  onLogin: (data: SignInDto) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export function LoginForm({ onLogin, isLoading, errorMessage, setErrorMessage }: LoginFormProps) {
  return (
    <View style={styles.container}>
      <LoginFields onLogin={onLogin} isLoading={isLoading} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      <SignUpPrompt />
    </View>
  );
}
