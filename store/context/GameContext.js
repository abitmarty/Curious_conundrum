import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export const GameContext = createContext({
  players: [], // Array to store player names or objects
  addPlayer: (player) => {}, // Function to add a player
  removePlayer: (playerId) => {}, // Function to remove a player
  changeScore: (playerId, addition) => {}, // Function to change player's score
  totalRounds: 0,
  incrementRounds: () => {},
});

function GameContextProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [totalRounds, setTotalRounds] = useState(0);

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

  // Load totalRounds from AsyncStorage on mount
  useEffect(() => {
    const loadRounds = async () => {
      try {
        const savedRounds = await AsyncStorage.getItem("totalRounds");
        if (savedRounds !== null) {
          setTotalRounds(parseInt(savedRounds, 10));
        }
      } catch (error) {
        console.error("Failed to load total rounds from AsyncStorage:", error);
      }
    };

    loadRounds();
  }, []);

  // Function to add a player to the list
  function addPlayer(playerName) {
    const newPlayer = { id: uuid.v4(), name: playerName, score: 0 };
    setPlayers((currentPlayers) => [...currentPlayers, newPlayer]);
  }

  // Function to remove a player by UUID
  function removePlayer(playerId) {
    setPlayers((currentPlayers) => {
      return currentPlayers.filter((player) => player.id !== playerId);
    });
  }

  // Function to change score of player
  function changeScore(playerId, newScore) {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player) =>
        player.id === playerId
          ? { ...player, score: newScore }
          : player
      )
    );
  }

  async function incrementRounds() {
    try {
      const newTotal = totalRounds + 1;
      setTotalRounds(newTotal);
      await AsyncStorage.setItem("totalRounds", newTotal.toString());
    } catch (error) {
      console.error("Failed to increment total rounds:", error);
    }
  }

  const value = {
    players,
    addPlayer,
    removePlayer,
    changeScore,
    totalRounds,
    incrementRounds,
  };

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export default GameContextProvider;
