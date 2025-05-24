import React from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import Colors from '../../constants/colors';
import FontSize from "../../constants/FontSize";
import TextCustom from "./TextCustom";
import Shadow from "./Shadow";
import TextInputCustom from "./TextInputCustom";

function InputCard({ title, value, onChangeText, placeholder, onSubmitEditing }) {
    return (
        <View style={styles.cardContainer}>
            <Shadow/>
            <ImageBackground
                source={require('../../assets/card/input_card_black.png')} // Replace with your image path
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <View style={styles.cardContent}>
                    <TextCustom style={styles.title}>{title}</TextCustom>
                    <TextInputCustom
                        placeholder={placeholder}
                        value={value}
                        onChangeText={((text) => onChangeText(text.slice(0, 12)))}
                        placeholderTextColor={Colors.placeholder}
                        onSubmitEditing={onSubmitEditing}
                        blurOnSubmit={false}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}


export default InputCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 28,
        aspectRatio: 425 / 161,
        width: '80%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        width: '70%',
        gap: 5,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: FontSize.big,
    },
});