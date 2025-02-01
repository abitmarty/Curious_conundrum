import React, { useEffect, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import SmallButton from "../components/ui/SmallButton";
import SettingsCard from "../components/ui/SettingsCard";
import { SettingsContext } from "../store/context/SettingsContext";
import { GameContext } from "../store/context/GameContext";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";

function SetRoundsScreen({ navigation }) {
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);
    const { players, changeScore } = useContext(GameContext);

    const isFocused = useIsFocused(); // Hook to track if the screen is currently visible

    // Update scores whenever the screen is opened
    useEffect(() => {
        if (isFocused) {
            updateSetting('roundsPlayed', 0);

            players.forEach(player => {
                changeScore(player.id, 0); 
            });
        }
    }, [isFocused]); // Re-run effect when `isFocused` changes

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.navigate("AddPlayersScreen")}/>
            <View style={styles.mainContainer}>
                <SettingsCard setting="rounds" options={[5, 10, 15]}></SettingsCard>
            </View>
            <PrimaryButtonBottom onPress={() => navigation.navigate("SetThemeScreen")}>Continue</PrimaryButtonBottom>
        </GameBackground>
    )
}

export default SetRoundsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
      },
})