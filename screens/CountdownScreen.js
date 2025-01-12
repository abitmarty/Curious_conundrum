import { View, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function CountDownScreen({ navigation, route }) {
    const { excludedPlayerId } = route.params;

    return (
        <View>
            <Text>Countdown</Text>
            <Text>Excluded: {excludedPlayerId}</Text>
            <PrimaryButton onPress={() => navigation.navigate("VoteScreen", { excludedPlayerId: excludedPlayerId})}>Continue</PrimaryButton>
        </View>
    )
}

export default CountDownScreen;