import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect

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

    return (
        <View>
            <Text>Excluded: {excludedPlayerId}</Text>
            <Text>View card screen</Text>
            <Text>{currentPlayerIndex}</Text>

            {phase === "actionPhase" && (
            <View>
                <Text>Give the phone to:</Text>
                <Text>{currentPlayer.name}</Text>
                <Text> </Text>

                <PrimaryButton onPress={changePhase}>Show statement</PrimaryButton>
            </View>
            )}

            {phase === "viewingPhase" && (
            <View>
                <Text>Read the statement:</Text>
                <Text>{currentPlayer.name}</Text>
                {currentPlayer.id === excludedPlayerId ? (
                    <Text>You are the liar</Text>
                ) : (
                    <Text>Who is the prettiest?</Text>
                )}

                <PrimaryButton onPress={changePhase}>
                {currentPlayerIndex === players.length - 1 ? "Start countdown" : "Next player"}
                </PrimaryButton>
            </View>
            )}
            
        </View>
    )
}

export default ViewCardScreen;