import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Colors from "../../constants/colors";
import FontSize from "../../constants/FontSize";

function ViewStatement({ children }) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.statement}>{children}</Text>
            <ImageBackground
                source={require('../../assets/background/bottom_card_dark_blocked.png')}
                style={styles.backgroundBottom}
                resizeMode="cover"
            >
            </ImageBackground>
        </View>
    )
}

export default ViewStatement;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.dark,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        overflow: 'hidden',
        width: '80%',
        position: 'absolute',
        marginTop: 70,
        zIndex: 1,
    },
    statement: {
        color: '#fff',
        fontSize: FontSize.mid,
        marginBottom: 35,
        marginTop: 60,
        marginLeft: 25,
        marginRight: 50,
    },
    backgroundBottom: {
        width: '100%',
        height: undefined,
        aspectRatio: 415 / 77,
        bottom: 0,
        position: 'absolute',
        zIndex: -1,
    },
})