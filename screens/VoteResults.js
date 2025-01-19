import React, { useEffect, useContext } from "react";
import { Text, View } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useIsFocused } from "@react-navigation/native";

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

    return (
        <View>
            <Text>Results of voting</Text>
            <Text>Voted out: {playerIdVotedOut}</Text>
            <Text>Liar: {excludedPlayerId}</Text>
            {playerIdVotedOut === excludedPlayerId ? (
                <Text>{votedOutPlayer.name} was the liar!</Text>
            ) : (
                <Text>{votedOutPlayer.name} was not the liar...</Text>
            )}
            <PrimaryButton onPress={() => navigation.navigate("Scoreboard")}>Continue</PrimaryButton>
            </View>
    )
}

export default VoteResults;