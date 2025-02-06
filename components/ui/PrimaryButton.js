import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../constants/colors';
import FontSize from '../../constants/FontSize';

function PrimaryButton({ children, onPress, typeBtn="continue", style }) {
    let backgroundSource;

    if (typeBtn === "add") {
        backgroundSource = require('../../assets/button/button_add.png')
    } else if (typeBtn === "remove") {
        backgroundSource = require('../../assets/button/button_remove.png')
    } else if (typeBtn === "red"){
        backgroundSource = require('../../assets/button/button_continue_red.png')
    } else {
        backgroundSource = require('../../assets/button/button_continue.png')
    }

    // Combine default and custom styles
    const containerStyle = [
        (typeBtn === "add" || typeBtn === "remove") ? styles.buttonSquareContainer : styles.buttonOuterContainer,
        styles.commonButton,
        style
    ];

    return (
        <View style={containerStyle}>
            <Pressable
                style={({ pressed }) => 
                    pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <ImageBackground
                    source={backgroundSource}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
                </ImageBackground>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        aspectRatio: 309 / 84,
    },
    buttonSquareContainer: {
        borderRadius: 20,
        aspectRatio: 84 / 84,
    },
    commonButton: {
        height: 64,
        margin: 4,
        padding: 0,
        margin: 0,
        overflow: 'hidden',
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
        fontSize: FontSize.big,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    },
});
