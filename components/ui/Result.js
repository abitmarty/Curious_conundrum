import { StyleSheet, Text, View } from "react-native";
import ResultCard from "./ResultCard";

function Result({ votedOutPlayer, excludedPlayer, correctVoting }) {
    return (
        <View style={styles.mainContainer}>
            <ResultCard style={styles.rotated} votedOutPlayer={votedOutPlayer} excludedPlayer={excludedPlayer} correctVoting={correctVoting}/>
            <ResultCard votedOutPlayer={votedOutPlayer} excludedPlayer={excludedPlayer} correctVoting={correctVoting}/>
        </View>
    )
}

export default Result;

const styles = StyleSheet.create({
    mainContainer: {
        gap: 20
    },
    rotated: {
        transform: [{ rotate: '180deg' }]
    }
})