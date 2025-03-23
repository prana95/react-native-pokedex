import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "./components/themedText";
import { useThemedColors } from "./hooks/useThemedColors";
import Card  from "./components/Card";
import PokemonCard  from "./components/pokemon/PokemonCard";

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
          numColumns={3}//numColumns is a prop that specifies the number of columns in the grid. In this case, we are using 3 columns.
          contentContainerStyle={[styles.gridGap,styles.list]}//contentContainerStyle is a style that is applied to the container of the list. In this case, we are adding a gap between items in the list. For vertical gaps. And we can use styles.gridGap without array also but we are adding other style so we are using array
          columnWrapperStyle={styles.gridGap}//columnWrapperStyle is a style that is applied to the container of each column. In this case, we are adding a gap between columns. For horizontal gaps
          renderItem={({item})=>
            <PokemonCard id={item.id} name={item.name} style={{flex:1/3}}/>
              
          }//renderItem is a function that takes an item and returns a React element to render that item. In this case, we are rendering a Card component for each item in the list.
          keyExtractor={(item) => item.id.toString()}
          // keyExtractor is a function that takes an item and returns a unique key for that item. This is used by React to keep track of items in the list and to optimize rendering performance.
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
  },
  gridGap:{
    gap:8
  },
  list:{
    padding:12
  }
})