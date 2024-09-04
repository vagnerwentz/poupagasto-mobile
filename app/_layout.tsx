import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

export default function AppLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('@PoupaGasto: token');
      console.log("Token: " + token);
      if (!token) {
        setIsAuthenticated(false);
        router.replace('/(auth)/sign-in');
      } else {
        setIsAuthenticated(true);
        router.replace('/(home)/dashboard/');
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // Tela de carregamento enquanto verifica autenticação
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
		<Stack>
			<Stack.Screen name="(home)" options={{ headerShown: false }} />
		</Stack>
	);
}
