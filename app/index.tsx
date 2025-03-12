import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href='/about'>À propos</Link>
      <Link href={{pathname:'/pokemon/[id]',params:{id:3}}}>Pokemon 3</Link>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: "red"},
})