import { Image, ViewStyle } from "react-native"
import ThemedText from "../themedText"
import Card from "../Card"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
}
export default function PokemonCard({style, id, name}:Props) {
    return (
        <Card style={style}>
            <ThemedText variant="caption" color="grayMedium">#{id.toString().padStart(3,'0')}</ThemedText>
            <Image 
                source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                width={72}
                height={72}
            />
            <ThemedText>{name}</ThemedText>
        </Card>
    )

}