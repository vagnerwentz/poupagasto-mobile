import { View } from "react-native";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import styles from './styles';
import { useState } from "react";
import { SignInDto } from "@/contracts/types/SignInDto";

type LoginFieldsProps = {
  onLogin: (data: SignInDto) => void;
}

export function LoginFields({ onLogin }: LoginFieldsProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    var signInDto: SignInDto = {
      email: email,
      password: password
    }
    
    onLogin(signInDto);
  }

  return (
    <View style={styles.container}>
      <Input 
        text="E-mail" 
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o seu e-mail." 
        isFocused={true} 
      />
      <View style={{ marginTop: 16 }} />
      <Input 
        text="Senha" 
        value={password}
        onChangeText={setPassword}
        placeholder="Digite a sua senha." 
        isFocused={true}
        secureTextEntry={true}
      />
      <View style={{ marginTop: 24 }} />
      <Button text="Acessar" onPress={handleSubmit} />
    </View>
  );
}