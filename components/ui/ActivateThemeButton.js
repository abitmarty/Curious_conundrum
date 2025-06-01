import React, { useContext } from "react";
import { View, Image, StyleSheet, Pressable, ImageBackground } from "react-native";
import Colors from "../../constants/colors";
import TextCustom from "./TextCustom";
import FontSize from "../../constants/FontSize";
import { SettingsContext } from "../../store/context/SettingsContext";

function ActivateThemeButton({ themeIsAvailable, theme }) {
    const { settings, updateSetting } = useContext(SettingsContext);

    const handleButtonPress = () => {
        if(themeIsAvailable) {
            updateSetting("gameMode", theme)
        }
    }

    return (
        <View style={styles.choiseContainer}>
            <Pressable
            onPress={handleButtonPress}
            style={({ pressed }) => 
                pressed ? [styles.optionsPressable, styles.pressed] : styles.optionsPressable
            }
            android_ripple={{ color: Colors.ripple }}
            >
                <ImageBackground
                    source={settings["gameMode"] === theme
                                ? require('../../assets/card/input_card_selection_green.png')
                                : require('../../assets/card/input_card_black.png')} // Replace with your actual image
                    style={styles.choiceBackground} // New style for image background
                    resizeMode="cover"
                >
                    <TextCustom style={styles.choiceText}>
                        {themeIsAvailable ? "Active" : "Unlock"}
                    </TextCustom>
                </ImageBackground>
            </Pressable>
        </View>
    );
}

export default ActivateThemeButton;

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingBottom: 5
    },
    choiceBackground: {
        aspectRatio: 425 / 161,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choiceText: {
        fontSize: FontSize.small,
        color: '#fff'
    },
    optionsPressable: {
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75,
    },
    choiseContainer: {
        width: 90,
        borderRadius: 8,
        overflow: 'hidden'
    }
})