import React, { useRef, useState, useContext, useEffect } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";
import { GameContext } from "../store/context/GameContext";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import ViewCard from "../components/ui/ViewCard";
import ViewStatement from "../components/ui/ViewStatement";
import SmallButton from "../components/ui/SmallButton";
import { casual } from "../conundrums/casual";
import { edgy } from "../conundrums/edgy";
import { overshare } from "../conundrums/overshare";
import { SettingsContext } from "../store/context/SettingsContext";
import { useActiveGame } from '../store/context/ActiveGameContext';



function ViewCardScreen({ navigation }) {
    const { settings } = useContext(SettingsContext);
    const { players } = useContext(GameContext);
    const { liar, statement, liarStatement, conundrums, setLiar, setStatement, setLiarStatement, setConundrums } = useActiveGame();
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const rotatedPlayers = [
        ...players.slice(settings.roundsPlayed % players.length),
        ...players.slice(0, settings.roundsPlayed % players.length),
      ];
    const [phase, setPhase] = useState("actionPhase");  // "viewingPhase" or "actionPhase"
    const currentPlayer = rotatedPlayers[currentPlayerIndex];
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const disabledTime = 10; //1500

    const getConundrumSet = () => {
        switch (settings["gameMode"]) {
            case "casual":
                return casual;
            case "edgy":
                return edgy;
            case "overshare":
                return overshare;
            default:
                return casual; // Default to casual if no valid mode
        }
    };


    useFocusEffect(
        React.useCallback(() => {
            // Select liar
            if (players?.length > 0) {
            const randomIndex = Math.floor(Math.random() * players.length);
            setLiar(players[randomIndex].id);
            }

            let workingSet = conundrums;

            // Refill conundrums if needed
            if (conundrums.length <= 2) {
            const conundrumSet = getConundrumSet();
            const shuffled = [...conundrumSet].sort(() => Math.random() - 0.5);
            workingSet = shuffled;
            }

            // Set statement and lie
            const [newStatement, ...rest] = workingSet;
            const lie = rest.find((item) => item !== newStatement) || newStatement;
            const newRemaining = rest.filter((item) => item !== lie);

            // Store the available statments
            setStatement(newStatement);
            setLiarStatement(lie);
            setConundrums(newRemaining);
        }, [players])
    );
      

    const nextPlayer = () => {
        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
        } else {
            // No more players, navigate to the next screen
            navigation.navigate("CountDownScreen"); // Replace with your next screen name
        }
    };

    const changePhase = () => {
        if (phase === "actionPhase") {
            setPhase("viewingPhase")
        }
        else {
            setPhase("actionPhase")
            nextPlayer();
        }
    }

    const buttonText =
        phase === "viewingPhase"
            ? currentPlayerIndex === players.length - 1
                ? "Continue"
                : "Next player"
            : "Show statement";

    const statementText = 
        phase === "viewingPhase"
            ? (currentPlayer.id === liar 
                ? liarStatement 
                : statement
                )
            : "";
    
    const viewCardText =
        phase === "actionPhase" 
                ? "Give the phone to:"
                : "Read the statement:";

    const initialValue = -20;  // Define the initial value here

    const translation = useRef(new Animated.Value(initialValue)).current;

    const startAnimation = () => {
        Animated.timing(translation, {
            toValue: translation.__getValue() === initialValue ? 70 : initialValue,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    if (!players || players.length === 0 || !currentPlayer) {
        return null;
    }

    const handleButtonPress = () => {
        if (buttonDisabled) return; // extra safeguard

        setButtonDisabled(true);
        changePhase();
        startAnimation();

        setTimeout(() => {
            setButtonDisabled(false);
        }, disabledTime);
    }

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.popTo('Home')}/>
            <View style={styles.mainContainer}>
                <View style={styles.stopOverflow}>
                    <ViewCard style={{ width: '100%' }} subtitle={currentPlayer.name}>{viewCardText}</ViewCard>
                    <Animated.View style={[styles.animated, { transform: [{ translateY: translation }] }]}>
                        <ViewStatement>{statementText}</ViewStatement>
                    </Animated.View>
                </View>
            </View>
            <PrimaryButtonBottom onPress={handleButtonPress} disabled={buttonDisabled}>{buttonText}</PrimaryButtonBottom>
        </GameBackground>
    )
}

export default ViewCardScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
    },
    stopOverflow: {
        flex: 1,
        alignItems: "center",
        borderRadius: 34,
        width: '80%',
        overflow: 'hidden',
    },
    subContainer: {
        width: '100%',
        alignItems: 'center',
    },
    animated: {
        alignItems: 'center'
    }
})