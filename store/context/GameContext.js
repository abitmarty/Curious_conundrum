import { createContext, useState } from "react";

export const GameContext = createContext({
  players: [], // Array to store player names or objects
  addPlayer: (player) => {}, // Function to add a player
  removePlayer: (playerName) => {}, // Function to remove a player
});

function GameContextProvider({ children }) {
  const [players, setPlayers] = useState([]);

  // Function to add a player to the list
  function addPlayer(player) {
    setPlayers((currentPlayers) => [...currentPlayers, player]);
  }

  // Function to remove a player by name
  function removePlayer(playerName) {
    setPlayers((currentPlayers) =>
      currentPlayers.filter((player) => player !== playerName)
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
