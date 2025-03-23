import { Image, ViewStyle, FlexAlignType, StyleSheet, View } from "react-native"
import ThemedText from "../themedText"
import Card from "../Card"
import { useThemedColors } from "@/app/hooks/useThemedColors"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
}
export default function PokemonCard({style, id, name}:Props) {
    const colors = useThemedColors()
    return (
        <Card style={[style,styles.card]}>
            <ThemedText style={styles.id} variant="caption" color="grayMedium">#{id.toString().padStart(3,'0')}</ThemedText>
            <Image 
                source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                width={72}
                height={72}
            />
            <ThemedText>{name}</ThemedText>
            <View style={[styles.shadows,{backgroundColor:colors.grayBackground}]} />
        </Card>
    )

}

const styles = StyleSheet.create({
    card:{
        position: 'relative',
        alignItems: 'center',
        padding: 4
    },
    id:{
        alignSelf: 'flex-end'
    },
    shadows:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 44,
        borderRadius: 7,
        zIndex: -1 // soit on met ça sinon on dois mettre le View element en premier dans la card element
    }
})