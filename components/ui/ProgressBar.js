import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from '../../constants/colors';
import FontSize from "../../constants/FontSize";
import { SettingsContext } from "../../store/context/SettingsContext";
import TextCustom from "./TextCustom";

function ProgressBar() {
    const { settings, updateSetting } = useContext(SettingsContext);

    const progressPercentage = (settings.roundsPlayed / settings.rounds) * 100;

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.progress, {width: `${progressPercentage}%`}]}></View>
            <TextCustom style={styles.rounds}>Round: {settings.roundsPlayed}/{settings.rounds}</TextCustom>
        </View>
    )
}
export default ProgressBar;

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
    },
    progress: {
        position: 'absolute',
        backgroundColor: Colors.green,
        width: '10%',
        height: '100%',
        left: 0
    },
    rounds: {
        fontSize: FontSize.small,
        color: Colors.gold,
    },
})