import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function GlobalBackground({ children }) {
  return (
    <ImageBackground
      source={require("../assets/background/top_main.png")}
      style={styles.backgroundImage} // Ensure the ImageBackground stretches
      resizeMode="cover"
    >
      {/* Overlay with pointerEvents set to none */}
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Ensure ImageBackground stretches to fill the screen
  },
  overlay: {
    flex: 1, // Ensure overlay stretches
    backgroundColor: "#3C3860",
    opacity: 0.9,
    pointerEvents: 'none', // Allow touches to pass through the overlay
  },
});
