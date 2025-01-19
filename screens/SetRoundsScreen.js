import React, { useEffect, useContext } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { SettingsContext } from "../store/context/SettingsContext";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useIsFocused } from "@react-navigation/native";


function SetRoundsScreen({ navigation }) {
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);
    const { players, changeScore } = useContext(GameContext);

    const isFocused = useIsFocused(); // Hook to track if the screen is currently visible

    // Update scores whenever the screen is opened
    useEffect(() => {
        if (isFocused) {
            updateSetting('roundsPlayed', 0);

            // Set every player's score to zero
            players.forEach(player => {
                changeScore(player.id, 0); // Update each player's score to 0
            });
        }
    }, [isFocused]); // Re-run effect when `isFocused` changes

    return (
        <View>
            <Text>Rounds: {settings.rounds}</Text>
            <View style={styles.choiceView}>
                <Pressable style={settings.rounds === 5 ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("rounds", 5)}>
                    <Text>5</Text>
                </Pressable>
                <Pressable style={settings.rounds === 10 ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("rounds", 10)}>
                    <Text>10</Text>
                </Pressable>
                <Pressable style={settings.rounds === 15 ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("rounds", 15)}>
                    <Text>15</Text>
                </Pressable>
            </View>
            <PrimaryButton onPress={() => navigation.navigate("SetThemeScreen")}>Continue</PrimaryButton>
        </View>
    )
}

export default SetRoundsScreen;

const styles = StyleSheet.create({
    choiceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: "white"
    },
    choiceInactive: {
        backgroundColor: "red",
        padding: 10
    },
    choiceActive: {
        backgroundColor: "green",
        padding: 10
    }
})
