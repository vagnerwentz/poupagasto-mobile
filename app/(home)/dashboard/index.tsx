import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        await AsyncStorage.removeItem("@PoupaGasto: token");
        router.replace("/(auth)/sign-in");
      };
      
    return (
        <View style={styles.container}>
            <Text onPress={handleLogout}>Página painel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
})