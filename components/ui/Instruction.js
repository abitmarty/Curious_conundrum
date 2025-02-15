import { View, Image, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import TextCustom from "./TextCustom";
import FontSize from "../../constants/FontSize";

function Instruction({ color, children, subTitle, hasBorder=true}) {
    return (
        <View style={[styles.mainContainer, hasBorder ? styles.mainBorder : {}]}>
            <View style={[styles.leftContainer, color ? {backgroundColor: color} : {}]}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/witch.png')}
                />
            </View>
            <View style={styles.rightContainer}>
                <TextCustom style={styles.title}>{children}</TextCustom>
                <TextCustom style={styles.subTitle}>{subTitle}</TextCustom>
            </View>
        </View>
    )
}

export default Instruction;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        padding: 20,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBorder: {
        borderBottomColor: Colors.grey,
        borderBottomWidth: 7,
    },
    leftContainer: {
        width: '30%',
        aspectRatio: 1,
        backgroundColor: Colors.red,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 15,
    },
    image: {
        width: '60%',
        height: '60%'
    },
    rightContainer: {
        width: '70%',
        justifyContent: 'center',
    },
    title: {
        color: "#fff",
        fontSize: FontSize.mid
    },
    subTitle: {
        color: Colors.gold,
        fontSize: FontSize.small
    }
})