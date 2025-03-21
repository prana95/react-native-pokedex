import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "./components/themedText";
import { useThemedColors } from "./hooks/useThemedColors";

export default function Index() {
  const colors = useThemedColors()
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colors.tint}]}>
      <ThemedText variant="headline" color="grayWhite">Pokédex</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})