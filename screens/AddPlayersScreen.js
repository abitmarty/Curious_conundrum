import React, { useContext, useRef, useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Animated } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { GameContext } from "../store/context/GameContext";
import GameBackground from "../components/ui/GameBackground";
import SmallButton from "../components/ui/SmallButton";
import InputCard from "../components/ui/InputCard";
import Colors from '../constants/colors';
import PlayerCard from "../components/ui/PlayerCard";
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import FontSize from "../constants/FontSize";
import TextCustom from "../components/ui/TextCustom";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


function AddPlayersScreen({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const { players, addPlayer, removePlayer } = useContext(GameContext);
  const inputRef = useRef(null);
  const insets = useSafeAreaInsets();

  const addPlayerHandler = () => {
    if (playerName.trim().length === 0) return;
    addPlayer(playerName);
    setPlayerName(""); // Clear input field
  };

  const removePlayerHandler = (playerId) => {
    removePlayer(playerId)
  }

  useEffect(() => {
    inputRef.current?.focus(); // Focus the input field
  }, []);

  // You need at least 3 players to play the game
  let functionCall;
  let buttonDisabled = true;
  if (players.length >= 3) {
    buttonDisabled = false;
      functionCall = () => { addPlayerHandler(); navigation.navigate("SetRoundsScreen")};
  }

  const playersNeeded = 3 - players.length;
  let footerTopText = "You need 1 more player!"
  if (playersNeeded > 1){
    footerTopText = `You need ${playersNeeded} more players!`;
  }

  const slideAnim = useRef(new Animated.Value(50)).current; // hidden by default

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: players.length < 3 ? 0 : 50, // show when <3, hide when ≥3
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [players.length]);


  return (
    <GameBackground>
      <SmallButton onPress={() => navigation.popTo('Home')}/>
      <View style={styles.mainContainer}>
        <InputCard
          title="Add Players:"
          placeholder="Player name"
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={addPlayerHandler}
        />
        <FlatList
          data={players}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flat}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <PlayerCard onPress={() => removePlayerHandler(item.id)}>{item.name}</PlayerCard>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
          columnWrapperStyle={styles.row}
        />
      </View>
      <Animated.View style={[styles.footerTop, { bottom: insets.bottom + 100, transform: [{ translateY: slideAnim }] }]}>
        <TextCustom style={styles.footerText}>{footerTopText}</TextCustom>
      </Animated.View>
      <View style={[styles.footer, { bottom: insets.bottom}]}>
        <PrimaryButton disabled={buttonDisabled} onPress={functionCall}>Continue</PrimaryButton>
        <PrimaryButton onPress={addPlayerHandler} typeBtn="add" ></PrimaryButton>
      </View>
    </GameBackground>
  );
}

export default AddPlayersScreen; // Correct default export

const styles = StyleSheet.create({
    cardContainer: {
      width: '100%',
      alignItems: "center",
      justifyContent: 'center',
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      gap: 20,
    },
    flat: {
      width: '100%',
    },
    flatListContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: Colors.border,
      backgroundColor: Colors.background,
      position: 'absolute',
      height: 90,
      bottom: 0,
      left: 0,
      right: 0,
      gap: 14,
      zIndex: 2,
    },
    footerTop: {
      position: 'absolute',
      zIndex: 0,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      color: 'white',
      fontSize: FontSize.mid,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    playerItem: {
      padding: 10,
      backgroundColor: "#f0f0f0",
      borderRadius: 5,
      marginVertical: 5,
    },
    players: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'red'
    },
    removePlayer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10
    },
    row: {
      width: '50%',
      alignItems: 'flex-start',
      paddingVertical: 20,
    }
  });