import React, { useContext } from "react";
import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { SettingsContext } from "../../store/context/SettingsContext";
import SettingsOptions from "./SettingsOptions";

function SettingsCard({ setting, options }) {
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);
    

    return (
        <View style={styles.choiceView}>
            <ImageBackground
                    source={require('../../assets/card/settings_card.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                <Text>Rounds:</Text>
                <Text>The game stops after {settings.rounds} rounds</Text>
                <SettingsOptions setting={setting} options={options}></SettingsOptions>
            </ImageBackground>
        </View>
    )
}

export default SettingsCard;

const styles = StyleSheet.create({
    choiceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 0,
        aspectRatio: 415 / 183,
        width: '80%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
