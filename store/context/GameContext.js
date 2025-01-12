import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export const GameContext = createContext({
  players: [], // Array to store player names or objects
  addPlayer: (player) => {}, // Function to add a player
  removePlayer: (playerId) => {}, // Function to remove a player
});

function GameContextProvider({ children }) {
  const [players, setPlayers] = useState([]);

  // Load players from AsyncStorage when the app starts
  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const savedPlayers = await AsyncStorage.getItem("players");
        if (savedPlayers) {
          setPlayers(JSON.parse(savedPlayers));  // Parse the stringified player data
        }
      } catch (error) {
        console.error("Failed to load players from AsyncStorage:", error);
      }
    };

    loadPlayers();
  }, []);

  // Save players to AsyncStorage whenever players change
  useEffect(() => {
    const savePlayers = async () => {
      try {
        await AsyncStorage.setItem("players", JSON.stringify(players));
      } catch (error) {
        console.error("Failed to save players to AsyncStorage:", error);
      }
    };

    if (players.length > 0) {
      savePlayers();
    }
  }, [players]);

  // Function to add a player to the list
  function addPlayer(playerName) {
    const newPlayer = { id: uuid.v4(), name: playerName };
    setPlayers((currentPlayers) => [...currentPlayers, newPlayer]);
  }

  // Function to remove a player by UUID
  function removePlayer(playerId) {
    setPlayers((currentPlayers) =>
      currentPlayers.filter((player) => player.id !== playerId)
    );
  }

  const value = {
    players: players,
    addPlayer: addPlayer,
    removePlayer: removePlayer,
  };

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export default GameContextProvider;
