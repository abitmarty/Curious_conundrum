import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => 
                    pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <ImageBackground
                    source={require('../../assets/button/button_continue.png')} // Your background image
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
        width: '60%',
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
    pressed: {
        opacity: 0.75,
    },
});
