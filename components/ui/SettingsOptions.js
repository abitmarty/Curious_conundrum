import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { GameContext } from "../../store/context/GameContext";
import { SettingsContext } from "../../store/context/SettingsContext";
import FontSize from "../../constants/FontSize";
import Colors from '../../constants/colors';

function SettingsOptions({ setting, options }){
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);


    return (
        <View style={styles.optionContainer}>
            {options.map((option) => (
                <View key={`option-${option}`} style={styles.choiseContainer}>
                    <Pressable
                    onPress={() => updateSetting(setting, option)}
                    style={({ pressed }) => 
                        pressed ? [styles.optionsPressable, styles.pressed] : styles.optionsPressable
                    }
                    android_ripple={{ color: Colors.primary600 }}
                    >
                        <ImageBackground
                            source={settings[setting] === option
                                ? require('../../assets/card/input_card.png')
                                : require('../../assets/card/input_card_black.png')} // Replace with your actual image
                            style={styles.choiceBackground} // New style for image background
                            resizeMode="cover"
                        >
                            <Text style={styles.choiceText}>
                                {option}
                            </Text>
                        </ImageBackground>
                    </Pressable>
                </View>
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
    choiceBackground: {
        aspectRatio: 425 / 161,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choiceText: {
        fontSize: FontSize.mid,
        color: '#fff'
    },
    optionsPressable: {
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75,
    },
    choiseContainer: {
        width: '25%',
        borderRadius: 10,
        overflow: 'hidden'
    }
})