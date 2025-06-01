import React, { useContext } from "react";
import { View, Image, StyleSheet, Pressable, ImageBackground } from "react-native";
import Colors from "../../constants/colors";
import TextCustom from "./TextCustom";
import FontSize from "../../constants/FontSize";
import { SettingsContext } from "../../store/context/SettingsContext";

function ActivateThemeButton({ theme, onActivate }) {
    const { settings, updateSetting, resetSettings } = useContext(SettingsContext);

    return (
        <View style={styles.choiseContainer}>
            <Pressable
            onPress={() => {}}
            style={({ pressed }) => 
                pressed ? [styles.optionsPressable, styles.pressed] : styles.optionsPressable
            }
            android_ripple={{ color: Colors.ripple }}
            >
                <ImageBackground
                    source={require('../../assets/card/input_card_black.png')}
                    style={styles.choiceBackground} // New style for image background
                    resizeMode="cover"
                >
                    <TextCustom style={styles.choiceText}>
                        Active
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
        borderRadius: 14,
        overflow: 'hidden'
    }
})