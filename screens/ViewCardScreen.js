import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import ViewCard from "../components/ui/ViewCard";
import ViewStatement from "../components/ui/ViewStatement";

function ViewCardScreen({ navigation }) {
    const { players } = useContext(GameContext);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [phase, setPhase] = useState("actionPhase");  // "viewingPhase" or "actionPhase"
    const [excludedPlayerId, setExcludedPlayerId] = useState(null); // Track the excluded player
    const currentPlayer = players[currentPlayerIndex];

    // Randomly select an excluded player on initial render
    useFocusEffect(
        React.useCallback(() => {
            const randomIndex = Math.floor(Math.random() * players.length);
            setExcludedPlayerId(players[randomIndex].id);
        }, [players])
    );

    const nextPlayer = () => {
        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
        } else {
            // No more players, navigate to the next screen
            navigation.navigate("CountDownScreen", { excludedPlayerId: excludedPlayerId}); // Replace with your next screen name
        }
    };

    const changePhase = () => {
        if (phase === "actionPhase") {
            setPhase("viewingPhase")
        }
        else {
            setPhase("actionPhase")
            nextPlayer();
        }
    }

    const buttonText =
    phase === "viewingPhase"
        ? currentPlayerIndex === players.length - 1
            ? "Start countdown"
            : "Next player"
        : "Show statement";

    return (
        <GameBackground>
            <View style={styles.mainContainer}>
                {phase === "actionPhase" && (
                    <ViewCard currentPlayer={currentPlayer}>Give the phone to:</ViewCard>
                )}

                {phase === "viewingPhase" && (
                <View style={styles.subContainer}>
                    <ViewCard currentPlayer={currentPlayer}>Read the statement:</ViewCard>
                    {currentPlayer.id === excludedPlayerId ? (
                        <ViewStatement>You are the liar</ViewStatement>
                    ) : (
                        <ViewStatement>Who is the prettiest?</ViewStatement>
                    )}
                </View>
                )}
            </View>
            <PrimaryButtonBottom onPress={changePhase}>{buttonText}</PrimaryButtonBottom>
        </GameBackground>
    )
}

export default ViewCardScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 50
    },
    subContainer: {
        width: '100%',
        alignItems: 'center',
    }
})