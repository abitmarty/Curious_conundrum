import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import ViewCard from "../components/ui/ViewCard";
import { useState, useEffect } from "react";

function CountDownScreen({ navigation, route }) {
    const { excludedPlayerId } = route.params;
    const [countdown, setCountDown] = useState(5);

    useEffect(() => {
        if (countdown > 0){
            const timer = setInterval(() => {
                setCountDown((prev) => prev - 1);
            }, 1000)

            return () => clearInterval(timer);
        } else {
            navigation.navigate("VoteScreen", { excludedPlayerId: excludedPlayerId})
        }
    }, [countdown])

    return (
        <GameBackground>
            <View style={styles.mainContainer}>
                <ViewCard subtitle={countdown.toString()}>Hello</ViewCard>
            </View>
            <PrimaryButtonBottom onPress={() => navigation.navigate("VoteScreen", { excludedPlayerId: excludedPlayerId})}>Continue</PrimaryButtonBottom>
        </GameBackground>
    )
}

export default CountDownScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
    },
})