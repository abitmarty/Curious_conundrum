import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, ImageBackground } from "react-native";
import Colors from '../../constants/colors';

function SmallButton({ children, onPress }) {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.buttonInnerContainer}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={onPress}
            >
                <ImageBackground
                    source={isPressed 
                        ? require('../../assets/button/button_small_close_pressed.png') 
                        : require('../../assets/button/button_small_close.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                />
            </Pressable>
        </View>
    )
}

export default SmallButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        overflow: 'hidden',
        aspectRatio: 72 / 72,
        width: '12%',
    },
    buttonInnerContainer: {
        flex: 1,
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
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20, // Adjust as needed
        fontWeight: 'bold',
    },
});