import { View, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function CountDownScreen({ navigation }) {
    return (
        <View>
            <Text>Countdown</Text>
            <PrimaryButton onPress={() => navigation.navigate("VoteScreen")}>Continue</PrimaryButton>
        </View>
    )
}

export default CountDownScreen;