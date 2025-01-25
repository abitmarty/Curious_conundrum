import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../constants/colors';
import FontSize from '../../constants/FontSize';

function PrimaryButton({ children, onPress, typeBtn="continue" }) {
    let backgroundSource;

    if (typeBtn === "add") {
        backgroundSource = require('../../assets/button/button_add.png')
    } else {
        backgroundSource = require('../../assets/button/button_continue.png')
    }
    return (
        <View style={typeBtn === "add" ? [styles.buttonAddContainer, styles.commonButtonHeight] : [styles.buttonOuterContainer, styles.commonButtonHeight]}>
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
        margin: 4,
        overflow: 'hidden',
        aspectRatio: 309 / 84,
    },
    buttonAddContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        aspectRatio: 84 / 84,
    },
    commonButtonHeight: {
        height: 70,
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
