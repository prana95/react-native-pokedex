import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

export default function Pokemon() {
    //using a hook to get the id of the pokemon
    const params = useLocalSearchParams()

    return (
        <View>
            <Text>Pokemon {params.id}</Text>
        </View>
    )
}