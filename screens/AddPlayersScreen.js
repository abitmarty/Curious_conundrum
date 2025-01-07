import React, { useContext, useState } from "react";
import { Text, TextInput, View, FlatList, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { GameContext } from "../store/context/GameContext";

function AddPlayersScreen() {
  const [playerName, setPlayerName] = useState("");
  const { players, addPlayer, removePlayer } = useContext(GameContext);

  const addPlayerHandler = () => {
    if (playerName.trim().length === 0) return;
    addPlayer(playerName);
    setPlayerName(""); // Clear input field
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Players</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter player name"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <PrimaryButton onPress={addPlayerHandler}>Add</PrimaryButton>
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.playerItem}>{item}</Text>
        )}
      />
    </View>
  );
}

export default AddPlayersScreen; // Correct default export

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
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
  });