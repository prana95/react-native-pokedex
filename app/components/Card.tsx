import { View, ViewProps, ViewStyle } from "react-native";
import { Shadows } from "../constants/Shadows";
import { useThemedColors } from "../hooks/useThemedColors";

type Props = ViewProps
export default function Card({style,...rest}:Props){
    const colors = useThemedColors()
    return <View style={[style,styles,{backgroundColor:colors.grayWhite}]} {...rest}/>
}

const styles = {
    borderRadius: 10,
    ...Shadows.dp2
} satisfies ViewStyle // statistically checks that styles is a ViewStyle object with satisfies keyword (for types test)