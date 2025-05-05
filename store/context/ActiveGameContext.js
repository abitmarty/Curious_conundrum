import React, { createContext, useContext, useState } from "react";

export const ActiveGameContext = createContext({
  liar: null,
  statement: null,
  liarStatement: null,
  votedOut: null,
  conundrums: [],
  setLiar: () => {},
  setStatement: () => {},
  setLiarStatement: () => {},
  setVotedOut: () => {},
  setConundrums: () => {},
  resetGame: () => {},
});

export const ActiveGameProvider = ({ children }) => {
  const [liar, setLiar] = useState(null);
  const [statement, setStatement] = useState(null);
  const [liarStatement, setLiarStatement] = useState(null);
  const [votedOut, setVotedOut] = useState(null);
  const [conundrums, setConundrums] = useState([]);

  const resetGame = () => {
    setLiar(null);
    setStatement(null);
    setLiarStatement(null);
    setVotedOut(null);
    setConundrums([]);
  };

  return (
    <ActiveGameContext.Provider
      value={{
        liar,
        statement,
        liarStatement,
        votedOut,
        conundrums,
        setLiar,
        setStatement,
        setLiarStatement,
        setVotedOut,
        setConundrums,
        resetGame,
      }}
    >
      {children}
    </ActiveGameContext.Provider>
  );
};

export const useActiveGame = () => {
  const context = useContext(ActiveGameContext);
  if (!context) {
    throw new Error("useActiveGame must be used within an ActiveGameProvider");
  }
  return context;
};
