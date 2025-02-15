import React, { useContext, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import TitleCard from "../components/ui/TitleCard";
import SmallButton from "../components/ui/SmallButton";
import PlayerCardPressable from "../components/ui/PlayerCardPressable";

function VoteScreen({ navigation, route }){
    const { players } = useContext(GameContext);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const { excludedPlayerId } = route.params;

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <PlayerCardPressable selectedPlayer={selectedPlayer} item={item} onPress={() => setSelectedPlayer(item.id)}>
                    {item.name}
                </PlayerCardPressable>
            </View>
        );
    };


    let functionCall;
    if (selectedPlayer) {
        functionCall = () => navigation.navigate("VoteResults", { playerIdVotedOut: selectedPlayer, excludedPlayerId: excludedPlayerId});
    }

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.popTo('Home')}/>
            <View style={styles.mainContainer}>
                <TitleCard>Vote the liar out!</TitleCard>
                <FlatList
                    data={players}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.flat}
                    renderItem={renderItem}
                    contentContainerStyle={styles.flatListContent}
                    columnWrapperStyle={styles.row}
                />
            </View>
            <PrimaryButtonBottom onPress={functionCall}>Vote out!</PrimaryButtonBottom>
        </GameBackground>
    )
}

export default VoteScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        gap: 20,
    },
    row: {
        width: '50%',
        alignItems: 'flex-start',
        paddingVertical: 20,
    },
    selectedPlayer: {
        backgroundColor: "#4CAF50", // Highlight selected player with a different color
    },
    flat: {
        width: '100%',
    },
    cardContainer: {
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
    },
    flatListContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});