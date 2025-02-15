import { Text, View, ImageBackground, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
import TextCustom from "./TextCustom";
import FontSize from "../../constants/FontSize";
import Shadow from "./Shadow";

function PlayerCardPressable({ children, onPress, selectedPlayer, item }) {
    return (
        <View style={styles.cardContainer}>
            <Shadow borderRadius={18} translate={10}/>
            <View style={styles.clipContainer}>
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) =>
                        pressed ? [styles.pressable, styles.pressed] : styles.pressable
                    }
                    android_ripple={{ color: Colors.ripple }}
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
        </View>
    );
}


export default PlayerCardPressable;

const styles = StyleSheet.create({
    cardContainer: {
        width: '80%',
        borderRadius: 18,
    },
    clipContainer: {
        borderRadius: 18, 
        overflow: 'hidden', // Ensures ripple effect is clipped
    },
    imageBackground: {
        aspectRatio: 195 / 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: FontSize.mid
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