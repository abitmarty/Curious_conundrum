import { Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";

function StartGameScreen({ navigation }){
    return(
        <GameBackground>
            <Text>Startgame screen</Text>
            <PrimaryButton onPress={() => navigation.navigate("AddPlayersScreen")}>Start</PrimaryButton>
        </GameBackground>
    )
}

export default StartGameScreen;