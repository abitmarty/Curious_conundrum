import { View, Image, StyleSheet } from "react-native";
import { useContext } from "react";
import Colors from "../../constants/colors";
import TextCustom from "./TextCustom";
import FontSize from "../../constants/FontSize";
import ActivateThemeButton from "./ActivateThemeButton";
import { GameContext } from "../../store/context/GameContext";
import ThemeOptionProgressbar from "./ThemeOptionProgressbar";

function ThemeOption({ theme, roundLimit, color, children, subTitle, hasBorder=true }){
    const { totalRounds } = useContext(GameContext);
    
    // Determine if the theme is available based on the round limit
    let themeIsAvailable = false;
    if (roundLimit === undefined || totalRounds >= roundLimit) {
        themeIsAvailable = true;
    }

    return (
        <View style={[styles.mainContainer, hasBorder ? styles.mainBorder : {}]}>
            <View style={styles.topContainer}>
                <View style={[styles.leftContainer, color ? {backgroundColor: color} : {}]}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/witch.png')}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.titleContainer}>
                        <TextCustom style={styles.title}>{children}</TextCustom>
                        <ActivateThemeButton theme={theme} themeIsAvailable={themeIsAvailable} />
                    </View>
                    <TextCustom style={styles.subTitle}>{subTitle}</TextCustom>
                </View>
            </View>

            {!themeIsAvailable && (
                <ThemeOptionProgressbar totalRounds={totalRounds} roundLimit={roundLimit} />
            )}
        </View>
    )
}


export default ThemeOption;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        padding: 20,
        gap: 20,
    },
    topContainer: {
        flexDirection: "row",
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
        gap: 3,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: "#fff",
        fontSize: FontSize.big
    },
    subTitle: {
        color: Colors.gold,
        fontSize: FontSize.small
    }
})