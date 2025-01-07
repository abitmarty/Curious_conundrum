import { Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({ navigation }){
    return(
        <View>
            <Text>Startgame screen</Text>
            <PrimaryButton onPress={() => navigation.navigate("AddPlayersScreen")}>Start</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;