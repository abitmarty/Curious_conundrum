import React, { useEffect, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import { SettingsContext } from "../store/context/SettingsContext";
import { useIsFocused } from "@react-navigation/native";

function ScoreBoard({ navigation }){
    const { settings, updateSetting } = useContext(SettingsContext);
    const { players } = useContext(GameContext);

    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    const isFocused = useIsFocused(); // Hook to track if the screen is currently visible

    // Render each player in the list
    const renderPlayer = ({ item }) => (
        <View>
            <Text>{item.name} {Array(item.score).fill("I").join("")}</Text>
        </View>
    );

    // Update scores whenever the screen is opened
    useEffect(() => {
        if (isFocused) {
            updateSetting('roundsPlayed', settings.roundsPlayed + 1);
        }
    }, [isFocused]); // Re-run effect when `isFocused` changes

    return (
        <View>
            <Text>Round: {settings.roundsPlayed}</Text>
            <Text>Total rounds: {settings.rounds}</Text>
            <Text>ScoreBoard</Text>
            <View>
                <Text>Player Rankings</Text>
                <FlatList
                    data={sortedPlayers}
                    renderItem={renderPlayer}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {settings.roundsPlayed >= settings.rounds ? (
                <PrimaryButton onPress={() => navigation.navigate("Home")}>Start new game</PrimaryButton>
            ) : (
                <PrimaryButton onPress={() => navigation.navigate("ViewCardScreen")}>Continue</PrimaryButton>
            )}
        </View>
    )
}

export default ScoreBoard;