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
        setCurrentPlayerIndex(currentPlayerIndex + 1)
    };

    return (
        <View>
            <Text>View card screen</Text>

            <View>
                <Text>Give the phone to:</Text>
                <Text>Playername</Text>

                <PrimaryButton>Show statement</PrimaryButton>
            </View>
        </View>
    )
}

export default ViewCardScreen;