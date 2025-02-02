import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SettingsContext } from "../store/context/SettingsContext";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import SmallButton from "../components/ui/SmallButton";
import SettingsCard from "../components/ui/SettingsCard";

function SetThemeScreen({ navigation }){
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.navigate("SetRoundsScreen")}/>
            <View style={styles.mainContainer}>
                <SettingsCard
                title={"Theme"}
                subtitle={"Select type of conundrums"}
                setting="gameMode"
                options={["casual", "edgy", "overshare"]} />
            </View>
            <PrimaryButtonBottom onPress={() => navigation.navigate("HowToPlayScreen")}>Continue</PrimaryButtonBottom>
        </GameBackground>
    )
}


export default SetThemeScreen;

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
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
      },
})
