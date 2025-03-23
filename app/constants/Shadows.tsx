import { ViewStyle } from "react-native";

export const Shadows = {
    dp2:{
        shadowOpacity: 0.2,// il est en pourcentage
        shadowColor: "black",
        shadowRadius: 3,//blur
        shadowOffset: {width: 0, height: 1},//axe x=0 y=1
        elevation: 2, //pour android pour ios il esxiste d'autres propriétés regarder la doc react-native
    }
} satisfies Record<string, ViewStyle> // Record<string, ViewStyle> is a type that represents an object with string keys and ViewStyle values