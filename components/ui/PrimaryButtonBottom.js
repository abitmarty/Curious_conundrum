import { StyleSheet, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


function PrimaryButtonBottom({ children, onPress, typeBtn, disabled }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.buttonContainer, {bottom: insets.bottom}]}>
            <PrimaryButton typeBtn={typeBtn} onPress={onPress} disabled={disabled}>
                {children}
            </PrimaryButton>
        </View>
    )
}

export default PrimaryButtonBottom;

const styles = StyleSheet.create({
    buttonContainer: {
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: undefined,
        aspectRatio: 588 / 300,
    },
})