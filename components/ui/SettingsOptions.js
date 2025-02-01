import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { GameContext } from "../../store/context/GameContext";
import { SettingsContext } from "../../store/context/SettingsContext";

function SettingsOptions({ setting, options }){
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);


    return (
        <View style={styles.optionContainer}>
            {options.map((option) => (
                <Pressable style={settings.rounds === option ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting(setting, option)}>
                    <Text>{option}</Text>
                </Pressable>
            ))}
        </View>
    )
}

export default SettingsOptions;

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    choiceInactive: {
        backgroundColor: "red",
        padding: 10
    },
    choiceActive: {
        backgroundColor: "green",
        padding: 10
    },
})