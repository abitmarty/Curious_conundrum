import { View, Text, StyleSheet, ImageBackground } from "react-native";
import FontSize from "../../constants/FontSize";

function TitleCard({ children }){
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
            source={require('../../assets/card/title_card.png')}
            style={styles.imageBackgound}
            >
                <Text style={styles.title}>{children}</Text>
            </ImageBackground>
        </View>
    )
}

export default TitleCard;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        aspectRatio: 415 / 106,
        width: '80%',
    },
    imageBackgound: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: FontSize.mid
    }
})