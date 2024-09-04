import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

import SignIn from "./(auth)/sign-in";

export default function Index() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 25
  }
});
