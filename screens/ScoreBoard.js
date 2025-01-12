import { View, Text } from "react-native";

function ScoreBoard({ navigation, route }){
    const { playerIdVotedOut, excludedPlayerId } = route.params;


    return (
        <View>
            <Text>ScoreBoard</Text>
            <Text>Voted out: {playerIdVotedOut}</Text>
            <Text>Excluded: {excludedPlayerId}</Text>
        </View>
    )
}

export default ScoreBoard;