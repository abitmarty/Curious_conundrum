import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import FontSize from "../../constants/FontSize";
import TextCustom from "./TextCustom";
import Shadow from "./Shadow";

function ViewCard({ children, subtitle, style, selectedGreen = false }) {
    return (
        <View style={[styles.cardContainer, style]}>
            <ImageBackground
            source={selectedGreen
                ? require('../../assets/card/input_card_selection_green.png')
                : require('../../assets/card/input_card_black.png')
            }
            style={styles.imageBackground}>
                <TextCustom style={styles.title}>{children}</TextCustom>
                <TextCustom style={styles.subtitle}>{subtitle}</TextCustom>
            </ImageBackground>
        </View>
    )
}

export default ViewCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 28,
        aspectRatio: 425 / 161,
        width: '80%',
        position: 'absolute',
        zIndex: 2,
    },
    stopOverflow: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'blue',
        borderRadius: 28,
        width: '100%'
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    title: {
        color: '#fff',
        fontSize: FontSize.big,
    },
    subtitle: {
        color: Colors.gold,
        fontSize: FontSize.ultra,
    }
})