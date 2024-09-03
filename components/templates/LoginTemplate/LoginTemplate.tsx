import { View, Text } from "react-native";
import { MoneyWave } from "@/components/MoneyWave";
import { Typewriter } from "@/components/ui/Typewriter/Typewriter";
import { LoginForm } from "@/components/organisms/LoginForm/LoginForm";

import { SignInDto } from "@/contracts/types/SignInDto";
import styles from "./styles";

type LoginTemplateProps = {
  onLogin: (data: SignInDto) => void;
}

export function LoginTemplate({ onLogin }: LoginTemplateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Poupa Gasto</Text>
      <Typewriter 
        delay={150} 
        style={styles.subtitle}
        text="Gerencie seus gastos de forma inteligente" 
        >
          <MoneyWave />
        </Typewriter>
      <LoginForm onLogin={onLogin} />
    </View>
  );
}
