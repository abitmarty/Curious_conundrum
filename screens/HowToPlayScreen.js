import { Pressable, Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function HowToPlayScreen({ navigation }){
    return (
        <View>
            <Text>How to play Curious Conundrum</Text>
            <PrimaryButton onPress={() => navigation.navigate("ViewCardScreen")}>Continue</PrimaryButton>
        </View>
    )
}

export default HowToPlayScreen;