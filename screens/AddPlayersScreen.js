import React, { useContext, useState } from "react";
import { Text, TextInput, View, FlatList, StyleSheet, Pressable } from "react-native";
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

  const removePlayerHandler = (playerId) => {
    removePlayer(playerId)
  }

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
            <View style={styles.players}>
                <Text style={styles.playerItem}>{item.name}</Text>
                <Pressable
                style={styles.removePlayer}
                onPress={() => removePlayerHandler(item.id)}
                >
                    <Text>x</Text>
                </Pressable>
            </View>
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
    players: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    removePlayer: {
        backgroundColor: "red",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10
    }
  });