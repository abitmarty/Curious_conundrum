import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import ViewCard from "../components/ui/ViewCard";
import React, { useState, useEffect } from "react";
import SmallButton from "../components/ui/SmallButton";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import TextCustom from "../components/ui/TextCustom";
import Colors from '../constants/colors';
import FontSize from "../constants/FontSize";
import { useActiveGame } from '../store/context/ActiveGameContext';

function CountDownScreen({ navigation }) {
    const { statement } = useActiveGame();
    const [countdown, setCountDown] = useState(1);

    useFocusEffect(
        React.useCallback(() => {
            if (countdown > 0) {
                const timer = setInterval(() => {
                    setCountDown((prev) => prev - 1);
                }, 1000);
    
                return () => clearInterval(timer); // Cleanup when leaving screen
            }
        }, [countdown])
    );

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.popTo('Home')}/>
            {countdown === 0 ? (
                <>
                    <View style={styles.mainContainer}>
                        <TextCustom style={[styles.statementText, styles.statementTop]}>{statement}</TextCustom>
                        <TextCustom style={[styles.statementText, styles.statementBottom]}>{statement}</TextCustom>
                    </View>
                    <View style={styles.lefty}>
                        <TextCustom style={[styles.statementText, styles.statementleft]}>
                            {statement}
                        </TextCustom>
                    </View>
                    <View style={styles.righty}>
                        <TextCustom style={[styles.statementText, styles.statementright]}>
                            {statement}
                        </TextCustom>
                    </View>
                    <PrimaryButtonBottom onPress={() => navigation.navigate("VoteScreen")}>Vote!</PrimaryButtonBottom>
                </>
            ) : (
            <View style={styles.mainContainer}>
                <ViewCard subtitle={countdown.toString()}>Countdown and point!</ViewCard>
            </View>
            )}
        </GameBackground>
    )
}

export default CountDownScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
        position: 'relative'
    },
    statementText: {
        color: Colors.gold,
        fontSize: FontSize.small,
        textAlign: 'center',
        width: 200,
    },
    statementTop: {
        transform: [{ rotate: '180deg' }]
    },
    statementBottom: {
        marginTop: '100%'
    },
    lefty: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'flex-start', 
    },    
    statementleft: {
        transform: [{ rotate: '90deg' }],
    },
    righty: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'flex-start', 
    },    
    statementright: {
        transform: [{ rotate: '270deg' }],
    },
})