import React from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import Colors from '../../constants/colors';
import FontSize from "../../constants/FontSize";
import TextCustom from "./TextCustom";

function InputCard({ title, value, onChangeText, placeholder, onSubmitEditing }) {
    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                source={require('../../assets/card/input_card.png')} // Replace with your image path
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <View style={styles.cardContent}>
                    <TextCustom style={styles.title}>{title}</TextCustom>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
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
        margin: 4,
        overflow: 'hidden',
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
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: FontSize.mid,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 6,
        fontSize: FontSize.mid,
        color: "#000",
        textAlign: 'center',
        fontWeight: 'bold',
    },
});