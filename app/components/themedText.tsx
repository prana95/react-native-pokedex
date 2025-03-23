import { Text, TextProps } from "react-native";
import { StyleSheet } from "react-native";
import { useThemedColors } from "../hooks/useThemedColors";
import Colors  from "../constants/colors";


const styles = StyleSheet.create({
    "body3": {
        fontSize: 10,
        lineHeight: 16,
        fontWeight:"regular"
    },
    "headline": {
        fontSize: 24,
        lineHeight: 32,
        fontWeight  : "bold"  
    },
    "subtitle3": {
        fontSize: 10,
        lineHeight: 16,
        fontWeight  : "bold"
        
    },
    "subtitle1": {
        fontSize: 14,
        lineHeight: 16,
        fontWeight  : "bold"
    },
    "subtitle2": {
        fontSize: 12,
        lineHeight: 16,
        fontWeight  : "bold"   
    },
    "body2": {
        fontSize: 12,
        lineHeight: 16,
        fontWeight:"regular"   
    },
    "body1": {
        fontSize: 14,
        lineHeight: 16,
        fontWeight:"regular"   
    },
    "caption": {
        fontSize: 8,
        lineHeight: 12,
        fontWeight:"regular"   
    }
})

type Props = TextProps &{ // The Props type extends TextProps from react-native. This means that Props will include all the properties that TextProps has and the additional properties also which is variant and color.
    variant?:keyof typeof styles; // The line variant: keyof typeof styles; in your Props type definition means that the variant property can only be one of the keys of the styles object (for exemple:"body3", "headline", "subtitle3", "subtitle1", "subtitle2") . This ensures that the variant property must match one of the defined style names in the styles object.
    color?:keyof typeof Colors["light"]; // The line color?: keyof typeof Colors["light"]; in your Props type definition means that the color property can only be one of the keys of the Colors["light"] object. This ensures that the color property must match one of the defined color names in the Colors["light"] object.
}



export default function ThemedText({variant,color, style,...rest}:Props) {
    const colors = useThemedColors();
    return <Text style={[styles[variant ?? 'body3'],{color:colors[color ?? "grayDark"]},style] } {...rest}></Text>; // variant ?? 'body3' it means if the the variant value is null or undefined the defaut value  of variant will be 'body3'
}

