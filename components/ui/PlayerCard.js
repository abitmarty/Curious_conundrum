import { Text, View, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

function PlayerCard({ children, onPress }) {
    return(
        <View style={styles.cardContainer}>
            <ImageBackground
                source={require('../../assets/card/player_card.png')}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <Text style={styles.text}>{children}</Text>
                <View style={styles.closeBtnContainer}>
                    <PrimaryButton style={{height: 30, borderRadius: 10}} typeBtn="remove" onPress={onPress} />
                </View>
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
        color: '#fff'
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