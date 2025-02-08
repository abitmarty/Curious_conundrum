import React, { useEffect, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import { SettingsContext } from "../store/context/SettingsContext";
import { useIsFocused } from "@react-navigation/native";
import GameBackground from "../components/ui/GameBackground";
import SmallButton from "../components/ui/SmallButton";
import TitleCard from "../components/ui/TitleCard";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import PlayerCard from "../components/ui/PlayerCard";
import Colors from '../constants/colors';
import FontSize from "../constants/FontSize";
import ProgressBar from "../components/ui/ProgressBar";
import TextCustom from "../components/ui/TextCustom";




function ScoreBoard({ navigation }){
    const { settings, updateSetting } = useContext(SettingsContext);
    const { players } = useContext(GameContext);

    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    const isFocused = useIsFocused(); // Hook to track if the screen is currently visible

    // Render each player in the list
    const renderPlayer = ({ item, index, totalPlayers }) => {
        // Only render the first 5 players and the last one
        if (index >= 5 && index !== totalPlayers - 1) {
            return null;
        }

        let positionText = `${index + 1}`; // th
        let positionSytle;
        if (index === 0) {
            positionText = "1 st";
        } else if (index === 1) {
            positionText = "2 nd";
            positionSytle = styles.positionSecond;
        } else if (index === 2) {
            positionText = "3 rd";
            positionSytle = styles.positionThird;
        } else if (index == totalPlayers - 1) {
            positionSytle = styles.positionLast;
        } 
    
        return (
            <View style={[
                styles.playerContainer,
                index === 0 ? styles.topPlayerContainer : null,
                index !== totalPlayers - 1 ? null : styles.bottomPlayerContainer
            ]}>
                <View style={styles.playerLeft}>
                    <View style={styles.scoreContainer}>
                        <TextCustom style={[styles.positionText, positionSytle]}>{positionText}</TextCustom>
                    </View>
                </View>
                <View style={styles.playerMiddle}>
                    <PlayerCard
                        cardColor={index === 0 ? "green" : (index === totalPlayers - 1 ? "red" : null)}
                        style={{ width: '100%' }}
                    >
                        {item.name}
                    </PlayerCard>
                </View>
                <View style={styles.playerRight}>
                    <TextCustom style={styles.score}>{Array(item.score).fill("I").join("")}</TextCustom>
                </View>
            </View>
        );
    };
    

    // Update scores whenever the screen is opened
    useEffect(() => {
        if (isFocused) {
            updateSetting('roundsPlayed', settings.roundsPlayed + 1);
        }
    }, [isFocused]); // Re-run effect when `isFocused` changes

    return (
        <GameBackground>
            <SmallButton onPress={() => {}}/>
            <View style={styles.mainContainer}>
                <TitleCard>Scoreboard</TitleCard>
                <FlatList
                    data={sortedPlayers}
                    renderItem={({ item, index }) => renderPlayer({ item, index, totalPlayers: sortedPlayers.length })}
                    keyExtractor={(item) => item.id}
                    style={{ width: '100%' }}
                />
            </View>
            {settings.roundsPlayed >= settings.rounds ? (
                <PrimaryButtonBottom onPress={() => navigation.navigate("Home")}>Start new game</PrimaryButtonBottom>
            ) : (
                <PrimaryButtonBottom onPress={() => navigation.navigate("ViewCardScreen")}>Continue</PrimaryButtonBottom>
            )}
            <ProgressBar />
        </GameBackground>
    )
}

export default ScoreBoard;

const styles = StyleSheet.create({
    mainContainer:{
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        margin: 0,
        gap: 20
    },
    playerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 5,
        gap: 10,
    },
    topPlayerContainer: {
        backgroundColor: Colors.green,
        paddingVertical: 10,
        marginBottom: 15,
    },
    bottomPlayerContainer: {
        marginTop: 15,
    },
    score: {
        color: '#fff',
        fontSize: FontSize.mid
    },
    playerMiddle: {
        width: '36%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    playerRight: {
        width: '40%',
        flexDirection: 'row',
    },
    playerLeft: {
        width: '24%',
        alignItems: 'flex-end',
    },
    scoreContainer: {
        width: '50%',
        alignItems: 'center'
    },
    positionText: {
        fontSize: FontSize.small,
        color: '#fff',
    },
    positionSecond: {
        color: Colors.gold,
    },
    positionThird: {
        color: Colors.gold,
    },
    positionLast: {
        color: Colors.red,
    }
})