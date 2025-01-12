import { createContext, useState } from "react";
import uuid from 'react-native-uuid';

export const GameContext = createContext({
  players: [], // Array to store player names or objects
  addPlayer: (player) => {}, // Function to add a player
  removePlayer: (playerId) => {}, // Function to remove a player
});

function GameContextProvider({ children }) {
  const [players, setPlayers] = useState([]);

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
    addPlayer: addPlayer, // Key-value pair linking to the function
    removePlayer: removePlayer,
  };

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export default GameContextProvider;
