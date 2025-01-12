import React, { useContext } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { SettingsContext } from "../store/context/SettingsContext";
import PrimaryButton from "../components/ui/PrimaryButton";

function SetRoundsScreen({ navigation }) {
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);

    return (
        <View>
            <Text>Rounds: {settings.rounds}</Text>
            <View style={styles.choiceView}>
                <Pressable style={settings.rounds === 5 ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("rounds", 5)}>
                    <Text>5</Text>
                </Pressable>
                <Pressable style={settings.rounds === 10 ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("rounds", 10)}>
                    <Text>10</Text>
                </Pressable>
                <Pressable style={settings.rounds === 15 ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("rounds", 15)}>
                    <Text>15</Text>
                </Pressable>
            </View>
            <PrimaryButton onPress={() => navigation.navigate("SetThemeScreen")}>Continue</PrimaryButton>
        </View>
    )
}

export default SetRoundsScreen;

const styles = StyleSheet.create({
    choiceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: "white"
    },
    choiceInactive: {
        backgroundColor: "red",
        padding: 10
    },
    choiceActive: {
        backgroundColor: "green",
        padding: 10
    }
})
