import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Colors from '../../constants/colors';
import { useRoute } from '@react-navigation/native';

function GameBackground({ children }) {
    const route = useRoute(); // Access the current route (screen)
    const isHomeScreen = route.name === 'Home'; // Check if current screen is 'Home'

    return (
        <View style={styles.gameContainer}>
            <ImageBackground
                source={isHomeScreen
                    ? require('../../assets/background/game_home_header.png')
                    : require('../../assets/background/game_top.png')
                } // Add your image path here
                style={[isHomeScreen ? styles.backgroundTopHome : styles.backgroundTopOther, styles.backgroundTop]}
                resizeMode="cover"
            >
            </ImageBackground>
            <ImageBackground
                source={require('../../assets/background/bottom.png')} // Add your image path here
                style={styles.backgroundBottom}
                resizeMode="cover"
            >
            </ImageBackground>
            <SafeAreaView style={styles.safeAreaContainer}>
                {children}
            </SafeAreaView>
        </View>
    )
}

export default GameBackground;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingTop: 20, // Adjust for top bar padding if needed
        paddingHorizontal: 10,
    },
    backgroundTop: {
        width: '100%',
        height: undefined,
        position: 'absolute',
        top: 0,
    },
    backgroundTopHome: {
        aspectRatio: 588 / 505,
    },
    backgroundTopOther: {
        aspectRatio: 588 / 323,
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
        // backgroundColor: "#ffffff"
    },
})