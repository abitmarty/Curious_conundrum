import React, { useContext } from "react";
import { Text, View } from "react-native";
import { GameContext } from "../store/context/GameContext";

function VoteResults({ navigation, route }){
    const { playerIdVotedOut, excludedPlayerId } = route.params;
    const { players } = useContext(GameContext);

    const votedOutPlayer  = players.find(player => player.id === playerIdVotedOut);

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
        </View>
    )
}

export default VoteResults;