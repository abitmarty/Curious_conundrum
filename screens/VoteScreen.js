import React, { useContext, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";

function VoteScreen({ navigation, route }){
    const { players } = useContext(GameContext);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const { excludedPlayerId } = route.params;

    const renderItem = ({ item }) => (
        <Pressable 
        style={[
            styles.playerItem, 
            selectedPlayer === item.id && styles.selectedPlayer
        ]}
            onPress={() => setSelectedPlayer(item.id)}
        >
            <Text>{item.name}</Text>
        </Pressable>
    );

    return (
        <View>
            <Text>Vote the liar out</Text>
            <Text>Selected: {selectedPlayer}</Text>
            <Text>Excluded: {excludedPlayerId}</Text>
            <FlatList
                data={players}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}  // Display two items per row
                columnWrapperStyle={styles.row}  // Add some space between columns
            />
            <PrimaryButton onPress={() => navigation.navigate("VoteResults", { playerIdVotedOut: selectedPlayer, excludedPlayerId: excludedPlayerId})}>Vote out!</PrimaryButton>
        </View>
    )
}

export default VoteScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    playerItem: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: "#e0e0e0",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    row: {
        justifyContent: "space-around", // Spread out columns evenly
    },
    selectedPlayer: {
        backgroundColor: "#4CAF50", // Highlight selected player with a different color
    },
});