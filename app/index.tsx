import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: "red", padding:24, justifyContent: "center", alignItems: "center"},
})