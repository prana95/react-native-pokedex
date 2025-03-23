import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "./components/themedText";
import { useThemedColors } from "./hooks/useThemedColors";
import Card  from "./components/Card";

export default function Index() {
  const colors = useThemedColors()
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colors.tint}]}>
      <View style={ styles.header}>
        <Image source={require("../assets/images/pokeball.png")} />
        <ThemedText variant="headline" color="grayWhite">Pokédex</ThemedText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    gap:16,
    padding: 12,
  }
})