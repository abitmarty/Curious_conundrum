import React, { useContext } from "react";
import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { SettingsContext } from "../../store/context/SettingsContext";
import SettingsOptions from "./SettingsOptions";
import FontSize from "../../constants/FontSize";
import Colors from '../../constants/colors';
import TextCustom from "./TextCustom";
import Shadow from "../../components/ui/Shadow";


function SettingsCard({ title, subtitle, setting, options }) {
    return (
        <View style={styles.choiceView}>
            <Shadow />
            <ImageBackground
                    source={require('../../assets/card/settings_card.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                    <View style={styles.contentContainer}>
                        <View style={styles.titleContainer}>
                            <TextCustom style={styles.title}>{title}</TextCustom>
                            <TextCustom style={styles.subtitle}>{subtitle}</TextCustom>
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
        fontSize: FontSize.mid,
    }
})
