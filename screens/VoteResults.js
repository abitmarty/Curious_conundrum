import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameContext } from "../store/context/GameContext";
import { useIsFocused } from "@react-navigation/native";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import SmallButton from "../components/ui/SmallButton";
import Result from "../components/ui/Result";

function VoteResults({ navigation, route }){
  const { playerIdVotedOut, excludedPlayerId } = route.params || {};
  const { players, changeScore } = useContext(GameContext);

  const isFocused = useIsFocused(); // Hook to track if the screen is currently visible

  const votedOutPlayer  = players.find(player => player.id === playerIdVotedOut);
  const excludedPlayer = players.find(player => player.id === excludedPlayerId);

    // Update scores whenever the screen is opened
  useEffect(() => {
    if (isFocused) {
      if (playerIdVotedOut === excludedPlayerId) {
        // Correct guess: Award points to all players except the excluded player
        players.forEach((player) => {
          if (player.id !== excludedPlayerId) {
            changeScore(player.id, player.score + 1);
          }
        });
      } else {
        // Incorrect guess: Award a point to the excluded player
        changeScore(excludedPlayer.id, excludedPlayer.score + 1);
      }
    }
  }, [isFocused]); // Re-run effect when `isFocused` changes

  const correctVoting = playerIdVotedOut === excludedPlayerId;

  return (
    <GameBackground correctVoting={correctVoting}>
      <SmallButton onPress={() => navigation.navigate("VoteScreen", { excludedPlayerId: excludedPlayerId})}/>
        <View style={styles.centeredView}>
          <Result correctVoting={correctVoting} votedOutPlayer={votedOutPlayer} excludedPlayer={excludedPlayer} />
        </View>
        {correctVoting ? 
          <PrimaryButtonBottom typeBtn={"red"} onPress={() => navigation.navigate("Scoreboard")}>Scoreboard</PrimaryButtonBottom>
          :
          <PrimaryButtonBottom onPress={() => navigation.navigate("Scoreboard")}>Scoreboard</PrimaryButtonBottom>
        }
    </GameBackground>
  )
}

export default VoteResults;

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,    
  }
})