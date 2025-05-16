import { Animated, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameBackground from "../components/ui/GameBackground";
import PrimaryButtonBottom from "../components/ui/PrimaryButtonBottom";
import ViewCard from "../components/ui/ViewCard";
import React, { useRef, useState, useEffect } from "react";
import SmallButton from "../components/ui/SmallButton";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import TextCustom from "../components/ui/TextCustom";
import Colors from '../constants/colors';
import FontSize from "../constants/FontSize";
import { useActiveGame } from '../store/context/ActiveGameContext';
import ResultCard from "../components/ui/ResultCard";
import ViewStatement from "../components/ui/ViewStatement";


function CountDownScreen({ navigation }) {
    const { statement } = useActiveGame();
    const [countdown, setCountDown] = useState(1); // Set seconds 1
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [startedCountdown, setStartedCountdown] = useState(false);

    const initialValue = -60;  // Define the initial value here

    const translation = useRef(new Animated.Value(initialValue)).current;

    const startAnimation = () => {
        Animated.timing(translation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        if (countdown === 0) {
            setButtonDisabled(false);
            startAnimation();
        }
    }, [countdown]);

    const handleButtonPress = () => {
        navigation.navigate("VoteScreen")
    }


    // useFocusEffect(
    //     React.useCallback(() => {
    //         if (countdown > 0) {
    //             const timer = setInterval(() => {
    //                 setCountDown((prev) => prev - 1);
    //             }, 1000);
    
    //             return () => clearInterval(timer); // Cleanup when leaving screen
    //         }
    //     }, [countdown])
    // );

    const startCountdown = () => {
        setStartedCountdown(true);
        setButtonDisabled(true);
      
        const timer = setInterval(() => {
          setCountDown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      };

    return (
        <GameBackground>
            <SmallButton onPress={() => navigation.popTo('Home')}/>
            <View style={styles.centeredView}>
            {countdown === 0 ? (
                <>
                    <ViewCard subtitle={"Read out loud:"}>Statement</ViewCard>
                </>
            ) : (
                <>
                    <ViewCard subtitle={countdown.toString()}>Countdown and point!</ViewCard>
                </>
            )}
                <Animated.View style={[styles.statementText, { transform: [{ translateY: translation }] }]}>
                    <ViewStatement>{countdown === 0 ? statement : ""}</ViewStatement>
                </Animated.View>
            </View>
            {startedCountdown ? (
                <PrimaryButtonBottom disabled={buttonDisabled} onPress={handleButtonPress}>Vote!</PrimaryButtonBottom>
                ) : (
                <PrimaryButtonBottom onPress={startCountdown}>Start countdown</PrimaryButtonBottom>
            )}

        </GameBackground>
    )
}

export default CountDownScreen;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,  
    },
    statementText: {
        alignItems: 'center',
    },
    // statementText: {
    //     color: Colors.gold,
    //     fontSize: FontSize.big,
    //     textAlign: 'center',
    //     maxWidth: 300,
    // },
    statementTop: {
        transform: [{ rotate: '180deg' }]
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