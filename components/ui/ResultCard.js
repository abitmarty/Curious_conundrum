import { View, Text, ImageBackground, StyleSheet } from "react-native";
import FontSize from "../../constants/FontSize";
import Colors from '../../constants/colors';
import TextCustom from "./TextCustom";

function ResultCard({ votedOutPlayer, correctVoting, style, subTitleOverride }) {

    let subTitle = correctVoting ? "Was the liar!" : "Was not the liar!";

    if (subTitleOverride) {
      subTitle = subTitleOverride;
    }

    const background = correctVoting ? require('../../assets/card/green_card.png') : require('../../assets/card/red_card.png');

    return (
        <View style={[styles.cardContainer, style]}>
            <ImageBackground
                source={background} // Replace with your image path
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <TextCustom style={styles.title}>{votedOutPlayer}</TextCustom>
                <TextCustom style={styles.subTitle}>{subTitle}</TextCustom>
            </ImageBackground>
        </View>
    )
}

export default ResultCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        aspectRatio: 415 / 137,
        width: '70%',
        zIndex: 2,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: FontSize.big,
        marginBottom: 5,
    },
    subTitle: {
        color: Colors.gold,
        fontSize: FontSize.mid,
    }
})