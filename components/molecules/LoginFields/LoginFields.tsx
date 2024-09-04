import { View, Text } from "react-native";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import styles from './styles';
import { useState } from "react";
import { SignInDto } from "@/contracts/types/SignInDto";

type LoginFieldsProps = {
  isLoading?: boolean;
  errorMessage: string;
  onLogin: (data: SignInDto) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export function LoginFields({ onLogin, isLoading, errorMessage, setErrorMessage }: LoginFieldsProps) {
  const [email, setEmail] = useState('johnystubark@gmail.com');
  const [password, setPassword] = useState('Password123@_');

  const handleSubmit = () => {
    var signInDto: SignInDto = {
      email: email,
      password: password
    }
    onLogin(signInDto);
  }

  const onChangeEmailText = (text: string) => {
    setEmail(text);
    if (errorMessage !== '') setErrorMessage('');
  }

  const onChangePasswordText = (text: string) => {
    setPassword(text);
    if (errorMessage !== '') setErrorMessage('');
  }

  return (
    <View style={styles.container}>
      <Input 
        text="E-mail" 
        value={email}
        // value="johnystubark@gmail.com"
        onChangeText={(e) => onChangeEmailText(e)}
        placeholder="Digite o seu e-mail." 
        isFocused={true} 
      />
      <View style={{ marginTop: 16 }} />
      <Input 
        text="Senha" 
        value={password}
        // value="Password123@_"
        onChangeText={(e) => onChangePasswordText(e)}
        placeholder="Digite a sua senha." 
        isFocused={true}
        secureTextEntry={true}
      />
      <View style={{ marginTop: 24 }} />
      {errorMessage && 
        (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        )
      }
      <Button text="Acessar" onPress={handleSubmit} isLoading={isLoading} />
    </View>
  );
}