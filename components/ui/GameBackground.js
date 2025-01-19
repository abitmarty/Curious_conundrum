import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Colors from '../../constants/colors';

function GameBackground({ children }) {
    return (
        <View style={styles.gameContainer}>
            <ImageBackground
                source={require('../../assets/background/game_home_header.png')} // Add your image path here
                style={styles.backgroundTop}
                resizeMode="cover"
            >
            </ImageBackground>
            <ImageBackground
                source={require('../../assets/background/bottom.png')} // Add your image path here
                style={styles.backgroundBottom}
                resizeMode="cover"
            >
            </ImageBackground>
            <View style={styles.gameButtons}>
                {children}
            </View>
        </View>
    )
}

export default GameBackground;

const styles = StyleSheet.create({
    backgroundTop: {
        width: '100%',
        height: undefined,
        aspectRatio: 588 / 505,
        position: 'absolute',
        top: 0,
    },
    backgroundBottom: {
        width: '100%',
        height: undefined,
        aspectRatio: 588 / 262,
        position: 'absolute',
        bottom: 0,
    },
    gameContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    gameButtons: {
        position: 'absolute',
        width: '100%',
        bottom: 100
    }
})