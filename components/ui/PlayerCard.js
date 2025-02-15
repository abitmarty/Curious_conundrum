import { Text, View, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";
import FontSize from "../../constants/FontSize";
import TextCustom from "./TextCustom";

function PlayerCard({ children, onPress, style, cardColor }) {
    let background;
    if (cardColor === 'green') {
        background = require('../../assets/card/player_card_green.png')
    } else if (cardColor === 'red') {
        background = require('../../assets/card/player_card_red.png')
    } else {
        background = require('../../assets/card/player_card.png')
    } 

    return(
        <View style={[styles.cardContainer, style]}>
            <ImageBackground
                source={background}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <TextCustom style={styles.text}>{children}</TextCustom>
                {onPress && (
                    <View style={styles.closeBtnContainer}>
                        <PrimaryButton style={{height: 30, borderRadius: 10}} typeBtn="remove" onPress={onPress} />
                    </View>
                )}
            </ImageBackground>
        </View>
    )
}

export default PlayerCard;

const styles = StyleSheet.create({
    cardContainer: {
        aspectRatio: 195 / 60,
        width: '80%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    text: {
        color: '#fff',
        fontSize: FontSize.mid,
    },
    closeBtnContainer: {
        position: 'absolute',
        padding: 0,
        margin: 0,
        top: -10,
        right: -10,
        zIndex: 10,
    },
});