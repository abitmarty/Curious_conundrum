import { View, StyleSheet } from "react-native";
import TextCustom from "./TextCustom";
import Colors from '../../constants/colors';
import FontSize from "../../constants/FontSize";


function ThemeOptionProgressbar({ totalRounds, roundLimit }) {
    const progressPercentage = (totalRounds / roundLimit) * 100;

    return (
    <View style={styles.mainContainer}>
        <View style={[styles.progress, {width: `${progressPercentage}%`}]}></View>
        <TextCustom style={styles.rounds}>{totalRounds}/{roundLimit}</TextCustom>
    </View>
    );
}

export default ThemeOptionProgressbar;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
        height: 22,
        borderRadius: 100,
        overflow: 'hidden',
    },
    progress: {
        position: 'absolute',
        backgroundColor: Colors.green,
        width: '10%',
        height: '100%',
        left: 0
    },
    rounds: {
        fontSize: FontSize.tiny,
        color: Colors.gold,
    },
})