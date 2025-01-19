import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingsContext = createContext({
  settings: {},
  updateSetting: (key, value) => {},
  resetSettings: () => {},
});

function SettingsContextProvider({ children }) {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    async function loadSettings() {
      const savedSettings = await AsyncStorage.getItem("gameSettings");
      setSettings(savedSettings ? JSON.parse(savedSettings) : { rounds: 10, gameMode: "casual", roundsPlayed: 0 });
    }
    loadSettings();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("gameSettings", JSON.stringify(settings));
  }, [settings]);

  function updateSetting(key, value) {
    setSettings((prevSettings) => ({ ...prevSettings, [key]: value }));
  }

  function resetSettings() {
    const defaultSettings = { rounds: 10, gameMode: "casual", roundsPlayed: 0 };
    setSettings(defaultSettings);
    AsyncStorage.setItem("gameSettings", JSON.stringify(defaultSettings));
  }

  const value = {
    settings,
    updateSetting,
    resetSettings,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export default SettingsContextProvider;
