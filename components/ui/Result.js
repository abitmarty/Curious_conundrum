import { StyleSheet, Text, View } from "react-native";
import ResultCard from "./ResultCard";

function Result({ votedOutPlayer, correctVoting }) {
    return (
        <View style={styles.mainContainer}>
            <ResultCard style={styles.rotated} votedOutPlayer={votedOutPlayer} correctVoting={correctVoting}/>
            <ResultCard votedOutPlayer={votedOutPlayer} correctVoting={correctVoting}/>
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