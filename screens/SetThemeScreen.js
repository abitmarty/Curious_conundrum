import React, { useContext } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { SettingsContext } from "../store/context/SettingsContext";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import SmallButton from "../components/ui/SmallButton";
import SettingsCard from "../components/ui/SettingsCard";
import TitleCard from "../components/ui/TitleCard";
import Instruction from "../components/ui/Instruction";
import Colors from '../constants/colors';
import ThemeOption from "../components/ui/ThemeOption";

function SetThemeScreen({ navigation }){
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.navigate("SetRoundsScreen")}/>
            <View style={styles.mainContainer}>
                <TitleCard>Select themes</TitleCard>
                <View style={styles.largeCard}>
                    <ThemeOption theme={"casual"} subTitle={"500+ casual statements"}>Casual</ThemeOption>
                    <ThemeOption theme={"edgy"} subTitle={"500+ to spice things up"} roundLimit={10}>Edgy</ThemeOption>
                    <ThemeOption theme={"overshare"} subTitle={"Genuinely not fun"} hasBorder={false} roundLimit={100}>Fr-endship</ThemeOption>
                    <ImageBackground
                        source={require('../assets/background/bottom_card_dark_blocked.png')}
                        style={styles.backgroundBottom}
                        resizeMode="cover"
                    >
                    </ImageBackground>
                </View>
            </View>
            {/* <View style={styles.mainContainer}>
                <SettingsCard
                title={"Theme"}
                subtitle={"Select type of conundrums"}
                setting="gameMode"
                options={["casual", "edgy", "overshare"]} />
            </View> */}
            <PrimaryButtonBottom onPress={() => navigation.navigate("HowToPlayScreen")}>Continue</PrimaryButtonBottom>
        </GameBackground>
    )
}


export default SetThemeScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
    },
    largeCard: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: Colors.dark,
        width: '80%',
        transform: [{ translateY: -40 }],
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        overflow: 'hidden',
        zIndex: 0,
    },
    backgroundBottom: {
        width: '100%',
        height: undefined,
        aspectRatio: 415 / 77,
        bottom: 0,
        position: 'absolute',
        zIndex: -1,
    },
})
