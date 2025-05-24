import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Colors from "../../constants/colors";
import FontSize from "../../constants/FontSize";
import TextCustom from "./TextCustom";

function ViewStatement({ children, style }) {
    return (
        <View style={[styles.mainContainer, style]}>
            <TextCustom style={styles.statement}>{children}</TextCustom>
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
        borderRadius: 28,
        overflow: 'hidden',
        width: '100%',
        position: 'absolute',
        zIndex: 1,
    },
    statement: {
        color: '#fff',
        fontSize: FontSize.mid,
        marginBottom: 35,
        marginTop: 70,
        marginLeft: 25,
        marginRight: 50,
    },
    backgroundBottom: {
        width: '100%',
        height: undefined,
        aspectRatio: 415 / 77,
        bottom: 0,
        position: 'absolute',
    },
})