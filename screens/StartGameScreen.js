import GameBackground from "../components/ui/GameBackground";
import { View, StyleSheet } from "react-native";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";

function StartGameScreen({ navigation }) {
    return (
        <GameBackground>
            <View style={styles.mainContainer}>
            </View>
            <PrimaryButtonBottom onPress={() => navigation.navigate("AddPlayersScreen")} >Start</PrimaryButtonBottom>
        </GameBackground>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
});
