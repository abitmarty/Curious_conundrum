import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import ViewCard from "../components/ui/ViewCard";
import React, { useState, useEffect } from "react";
import SmallButton from "../components/ui/SmallButton";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect

function CountDownScreen({ navigation, route }) {
    const { excludedPlayerId } = route.params;
    const [countdown, setCountDown] = useState(5);

    useFocusEffect(
        React.useCallback(() => {
            if (countdown > 0) {
                const timer = setInterval(() => {
                    setCountDown((prev) => prev - 1);
                }, 1000);
    
                return () => clearInterval(timer); // Cleanup when leaving screen
            } else {
                navigation.navigate("VoteScreen", { excludedPlayerId });
            }
        }, [countdown])
    );

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.popTo('Home')}/>
            <View style={styles.mainContainer}>
                <ViewCard subtitle={countdown.toString()}>Countdown and point!</ViewCard>
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