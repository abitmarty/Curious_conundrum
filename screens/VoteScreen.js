import React, { useContext, useCallback, useState, useEffect  } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import TitleCard from "../components/ui/TitleCard";
import SmallButton from "../components/ui/SmallButton";
import PlayerCardPressable from "../components/ui/PlayerCardPressable";
import { useActiveGame } from "../store/context/ActiveGameContext";

function VoteScreen({ navigation }){
    const { players } = useContext(GameContext);
    const { votedOut, setVotedOut } = useActiveGame();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setVotedOut(null);
        }, [])
    );

    useEffect(() => {
        if (votedOut != null) {
            setButtonDisabled(false);
        }
    }, [votedOut]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <PlayerCardPressable selectedPlayer={votedOut} item={item} onPress={() => setVotedOut(item.id)}>
                    {item.name}
                </PlayerCardPressable>
            </View>
        );
    };


    let functionCall = () => {}; // default no-op function

    if (votedOut) {
        functionCall = () => navigation.navigate("VoteResults");
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
            <PrimaryButtonBottom disabled={buttonDisabled} onPress={functionCall}>Vote out!</PrimaryButtonBottom>
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