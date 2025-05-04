import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameContext } from "../store/context/GameContext";
import { useIsFocused } from "@react-navigation/native";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import SmallButton from "../components/ui/SmallButton";
import Result from "../components/ui/Result";
import { useActiveGame } from "../store/context/ActiveGameContext";

function VoteResults({ navigation }){
  const { votedOut, liar } = useActiveGame();
  const { players, changeScore } = useContext(GameContext);

  const isFocused = useIsFocused(); // Hook to track if the screen is currently visible

  let votedOutPlayer = "";
  let excludedPlayer = "";
  
  if (votedOut) {
    const foundVotedOut = players.find(player => player.id === votedOut);
    if (foundVotedOut) {
      votedOutPlayer = foundVotedOut.name;
    }
  }
  
  if (liar) {
    const foundLiar = players.find(player => player.id === liar);
    if (foundLiar) {
      excludedPlayer = foundLiar.name;
    }
  }
  
  // Update scores whenever the screen is opened
  useEffect(() => {
    if (isFocused) {
      if (votedOut === liar) {
        // Correct guess: Award points to all players except the excluded player
        players.forEach((player) => {
          if (player.id !== liar) {
            changeScore(player.id, player.score + 1);
          }
        });
      } else {
        // Incorrect guess: Award a point to the excluded player
        changeScore(excludedPlayer.id, excludedPlayer.score + 1);
      }
    }
  }, [isFocused]); // Re-run effect when `isFocused` changes

  const correctVoting = votedOut === liar;

  return (
    <GameBackground correctVoting={correctVoting}>
      <SmallButton onPress={() => navigation.popTo('Home')}/>
        <View style={styles.centeredView}>
          <Result correctVoting={correctVoting} votedOutPlayer={votedOutPlayer} />
        </View>
        {correctVoting ? 
          <PrimaryButtonBottom typeBtn={"red"} onPress={() => navigation.navigate("ShowLiar")}>Reveal lie</PrimaryButtonBottom> // Cheesy Line
          :
          <PrimaryButtonBottom onPress={() => navigation.navigate("ShowLiar")}>Reveal lie</PrimaryButtonBottom> // Cheesy Line
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