import { Text, View, StyleSheet } from "react-native";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import GameBackground from "../components/ui/GameBackground";
import SmallButton from "../components/ui/SmallButton";

function HowToPlayScreen({ navigation }){
    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.navigate("SetRoundsScreen")}/>
            <View style={styles.mainContainer}>
                <Text>How to play Curious Conundrum</Text>
            </View>
            <PrimaryButtonBottom onPress={() => navigation.navigate("ViewCardScreen")}>Start game</PrimaryButtonBottom>
        </GameBackground>
    )
}

export default HowToPlayScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
    },
})