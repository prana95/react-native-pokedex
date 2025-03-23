import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "./components/themedText";
import { useThemedColors } from "./hooks/useThemedColors";
import Card  from "./components/Card";

export default function Index() {
  const colors = useThemedColors()
  const pokemons = Array.from({length:35},(_,k)=>({
    name:'Pokémon name',
    id:k+1
  }))
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colors.tint}]}>
      <View style={ styles.header}>
        <Image source={require("../assets/images/pokeball.png")} width={24} height={24} />
        <ThemedText variant="headline" color="grayWhite">Pokédex</ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList 
          data={pokemons}
          renderItem={({item})=>
            <View>
              <Text>{item.name}</Text>
            </View>
          }  
          keyExtractor={(item)=> (item.id.toString()
            // keyExtractor is a function that takes an item and returns a unique key for that item. This is used by React to keep track of items in the list and to optimize rendering performance.
          )}
          />
      </Card>
      
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
  },
  body:{
    flex: 1,
  }
})