import { Text, View } from "react-native";
import { useFonts } from "expo-font";


function TextCustom({ children, style }) {
    const [fontsLoaded] = useFonts({
        "Itim-Regular": require("../../assets/fonts/Itim-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null; // Show a loading screen or return nothing
    }

    return (
        <View>
            <Text style={[style, { fontFamily: "Itim-Regular" }]}>{children}</Text>
        </View>
    )
}

export default TextCustom;