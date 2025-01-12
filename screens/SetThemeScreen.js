import React, { useContext } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { SettingsContext } from "../store/context/SettingsContext";
import PrimaryButton from "../components/ui/PrimaryButton";

function SetThemeScreen({ navigation }){
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);

    return (
        <View>
            <Text>Game mode: {settings.gameMode}</Text>
            <View style={styles.choiceView}>
                <Pressable style={settings.gameMode === "casual" ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("gameMode", "casual")}>
                    <Text>Casual</Text>
                </Pressable>
                <Pressable style={settings.gameMode === "edgy" ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("gameMode", "edgy")}>
                    <Text>Edgy</Text>
                </Pressable>
                <Pressable style={settings.gameMode === "overshare" ? styles. choiceActive : styles.choiceInactive}
                onPress={() => updateSetting("gameMode", "overshare")}>
                    <Text>Overshare</Text>
                </Pressable>
            </View>
            <PrimaryButton onPress={() => navigation.navigate("HowToPlayScreen")}>Continue</PrimaryButton>
        </View>
    )
}


export default SetThemeScreen;

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
