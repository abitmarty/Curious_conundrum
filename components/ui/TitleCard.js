import { View, Text, StyleSheet, ImageBackground } from "react-native";
import FontSize from "../../constants/FontSize";
import TextCustom from "./TextCustom";
import Shadow from "./Shadow";

function TitleCard({ children }){
    return (
        <View style={styles.mainContainer}>
            {/* <Shadow borderRadius={100}/> */}
            <ImageBackground
            source={require('../../assets/card/title_card.png')}
            style={styles.imageBackgound}
            >
                <TextCustom style={styles.title}>{children}</TextCustom>
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
        zIndex: 1,
    },
    imageBackgound: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: FontSize.big
    }
})