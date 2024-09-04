import { useState } from "react";
import { LoginTemplate } from "@/components/templates/LoginTemplate/LoginTemplate";
import { SignInDto } from "@/contracts/types/SignInDto";
import { SignInResponseDto } from "@/contracts/interfaces/Login";
import api from "@/services/api";
import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
	const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (data: SignInDto) => {
    await loginAsync(data);
  };

  async function loginAsync(data: SignInDto) {
    try {
      setIsLoading(true);
      var response = await api.post<SignInResponseDto>("/api/v1/users/signin", data);
      
      if (response.data.data) {
        await AsyncStorage.setItem("@PoupaGasto: token", response.data.data.token);
				router.navigate("/(home)/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        var signInResponseErrorDto = error as AxiosError<SignInResponseDto>;
        if (signInResponseErrorDto.response?.data.statusCode === 400) {
          setErrorMessage("E-mail ou senha incorretos. Por favor, tente novamente.");
        }
      } else {
        setErrorMessage("Ocorreu um erro inesperado. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
        <LoginTemplate
          onLogin={handleLogin} 
          isLoading={isLoading} 
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
    </>
  );
}