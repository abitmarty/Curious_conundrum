import { Text, View, ImageBackground, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
import TextCustom from "./TextCustom";
import FontSize from "../../constants/FontSize";

function PlayerCardPressable({ children, onPress, selectedPlayer, item }) {
    return(
        <View style={styles.cardContainer}>
            <Pressable
            onPress={onPress}
            style={({ pressed }) => 
                pressed ? [styles.pressable, styles.pressed] : styles.pressable
            }
            android_ripple={{ color: Colors.primary600 }}
            >
                <ImageBackground
                    source={selectedPlayer === item.id
                        ? require('../../assets/card/player_card_red.png')
                        : require('../../assets/card/player_card.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                    <TextCustom style={styles.text}>{children}</TextCustom>

                </ImageBackground>
            </Pressable>
        </View>
    )
}

export default PlayerCardPressable;

const styles = StyleSheet.create({
    cardContainer: {
        width: '80%',
        borderRadius: 18,
        overflow: 'hidden'
    },
    imageBackground: {
        aspectRatio: 195 / 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: FontSize.small
    },
    closeBtnContainer: {
        position: 'absolute',
        padding: 0,
        margin: 0,
        top: -10,
        right: -10,
        zIndex: 10,
    },
    pressable: {
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75,
    },
});