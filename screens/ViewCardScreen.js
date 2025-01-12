import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";

function ViewCardScreen({ navigation }) {
    const { players } = useContext(GameContext);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [phase, setPhase] = useState("actionPhase");  // "viewingPhase" or "actionPhase"
    const currentPlayer = players[currentPlayerIndex];

    const nextPlayer = () => {
        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
        } else {
            // No more players, navigate to the next screen
            navigation.navigate("CountDownScreen"); // Replace with your next screen name
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
                <Text>Who is the prettiest?</Text>

                <PrimaryButton onPress={changePhase}>
                {currentPlayerIndex === players.length - 1 ? "Start countdown" : "Next player"}
                </PrimaryButton>
            </View>
            )}
            
        </View>
    )
}

export default ViewCardScreen;