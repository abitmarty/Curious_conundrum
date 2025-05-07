import { useFocusEffect } from "@react-navigation/native";
import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import GameBackground from "../components/ui/GameBackground";
import SmallButton from "../components/ui/SmallButton";
import TextCustom from "../components/ui/TextCustom";
import TitleCard from "../components/ui/TitleCard";
import Colors from '../constants/colors';
import Instruction from "../components/ui/Instruction";
import Shadow from "../components/ui/Shadow";
import { useActiveGame } from "../store/context/ActiveGameContext";

function HowToPlayScreen({ navigation }){
    const { resetGame } = useActiveGame();

    useFocusEffect(
        React.useCallback(() => {
            resetGame();
        }, [])
    );

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.navigate("SetThemeScreen")}/>
            <View style={styles.mainContainer}>
                <TitleCard>How to play</TitleCard>
                <View style={styles.largeCard}>
                    <Instruction subTitle={"Not out loud!"}>Read the statement</Instruction>
                    <Instruction color={Colors.green} subTitle={"Press continue first!"}>Pass the phone</Instruction>
                    <Instruction color={Colors.lightBlue} subTitle={"Who fits the statement?"}>3. 2. 1. Point!</Instruction>
                    <Instruction color={Colors.darkBlue} subTitle={"Find the intruder!"} hasBorder={false}>Discuss and Vote</Instruction>
                    <ImageBackground
                        source={require('../assets/background/bottom_card_dark_blocked.png')}
                        style={styles.backgroundBottom}
                        resizeMode="cover"
                    >
                    </ImageBackground>
                </View>
            </View>
            <PrimaryButtonBottom onPress={() => navigation.navigate("ViewCardScreen")}>Start game</PrimaryButtonBottom>
        </GameBackground>
    )
}

export default HowToPlayScreen;

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