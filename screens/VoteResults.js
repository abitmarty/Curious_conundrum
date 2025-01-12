import React, { useContext } from "react";
import { Text, View } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";

function VoteResults({ navigation, route }){
    const { playerIdVotedOut = "1", excludedPlayerId = "1" } = route.params || {};
    const { players } = useContext(GameContext);

    const votedOutPlayer  = players.find(player => player.id === playerIdVotedOut);

    return (
        <View>
            <Text>Results of voting</Text>
            <Text>Voted out: {playerIdVotedOut}</Text>
            <Text>Liar: {excludedPlayerId}</Text>
            {playerIdVotedOut === excludedPlayerId ? (
                // <Text>{votedOutPlayer.name} was the liar!</Text>
                <Text>Was the liar!</Text>
            ) : (
                // <Text>{votedOutPlayer.name} was not the liar...</Text>
                <Text>Not the liar...</Text>
            )}
            <PrimaryButton onPress={() => navigation.navigate("Scoreboard", { playerIdVotedOut: playerIdVotedOut, excludedPlayerId: excludedPlayerId})}>Continue</PrimaryButton>
            </View>
    )
}

export default VoteResults;