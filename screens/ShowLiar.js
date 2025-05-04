import React, { useContext } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import { useActiveGame } from "../store/context/ActiveGameContext";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import ResultCard from "../components/ui/ResultCard";
import SmallButton from "../components/ui/SmallButton";
import { GameContext } from "../store/context/GameContext";
import ViewStatement from "../components/ui/ViewStatement";
import ViewCard from "../components/ui/ViewCard";


function ShowLiar({ navigation }) {
    const { votedOut, liar, statement } = useActiveGame();
    const { players } = useContext(GameContext);

    const correctVoting = votedOut === liar;
    const excludedPlayer = players.find(player => player.id === liar)?.name || "";

    return (
        <GameBackground correctVoting={!correctVoting}>
        <SmallButton onPress={() => navigation.popTo('Home')}/>
        <View style={styles.centeredView}>
            <ResultCard correctVoting={!correctVoting} votedOutPlayer={excludedPlayer} subTitleOverride={"Liar's statement:"} />
            <View style={styles.statementText}>
                <ViewStatement style={{ width: '70%' }}>{statement}</ViewStatement>
            </View>
        </View>
        <PrimaryButtonBottom onPress={() => navigation.navigate("ScoreBoard")}>Scoreboard</PrimaryButtonBottom>


      </GameBackground>
    )
}

export default ShowLiar;

const styles = StyleSheet.create({
    centeredView: {
      position: 'absolute',
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,    
    },
    statementText: {
        alignItems: 'center',
        transform: [{ translateY: -60 }],
    }
  })