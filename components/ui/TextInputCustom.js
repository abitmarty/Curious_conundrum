import { StyleSheet, TextInput, View } from "react-native";
import { useFonts } from "expo-font";
import FontSize from "../../constants/FontSize";


function TextInputCustom({ ...props }) {
    const [fontsLoaded] = useFonts({
        "Itim-Regular": require("../../assets/fonts/Itim-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null; // Show a loading screen or return nothing
    }

    return (
        <TextInput
            {...props}
            style={[styles.input, { fontFamily: 'Itim-Regular' }]}
        />
    )
}

export default TextInputCustom;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 4,
        fontSize: FontSize.big,
        color: "#000",
        textAlign: 'center',
    },
})