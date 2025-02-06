import { StyleSheet, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

function PrimaryButtonBottom({ children, onPress, typeBtn }) {
    return (
        <View style={styles.buttonContainer}>
            <PrimaryButton typeBtn={typeBtn} onPress={onPress}>
                {children}
            </PrimaryButton>
        </View>
    )
}

export default PrimaryButtonBottom;

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
})