import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import { StyleSheet, View } from "react-native";

function StartGameScreen({ navigation }) {
    return (
        <GameBackground>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={() => navigation.navigate("AddPlayersScreen")}>
                    Start
                </PrimaryButton>
            </View>
        </GameBackground>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 70, // 40px from the bottom of the screen
        left: 0,
        right: 0,
        alignItems: 'center', // Horizontally center the button
    },
});
