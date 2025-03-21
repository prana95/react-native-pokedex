import { useColorScheme } from "react-native";
import Colors  from "../constants/colors";

export function useThemedColors() {
    const theme = useColorScheme() ?? "dark" ;// if i have no theme i will use the light theme as default
    return Colors[theme];
}

