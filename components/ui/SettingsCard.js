import React, { useContext } from "react";
import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { SettingsContext } from "../../store/context/SettingsContext";
import SettingsOptions from "./SettingsOptions";
import FontSize from "../../constants/FontSize";
import Colors from '../../constants/colors';

function SettingsCard({ title, subtitle, setting, options }) {
    return (
        <View style={styles.choiceView}>
            <ImageBackground
                    source={require('../../assets/card/settings_card.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                    <View style={styles.contentContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>
                        <SettingsOptions setting={setting} options={options}></SettingsOptions>
                    </View>
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
    contentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    titleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: FontSize.big,
        padding: 0,
    },
    subtitle: {
        color: Colors.gold,
        fontSize: FontSize.small,
    }
})
