import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./components/themedText";
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText variant="headline" >Pokédex</ThemedText>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: "red"},
})