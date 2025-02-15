import { StyleSheet, View } from "react-native";

function Shadow({ borderRadius = 28, translate = 12 }) {
    return (
        <View style={[
            styles.shadowContainer,
            {
                borderRadius: borderRadius,
                transform: [
                    { translateX: -Math.abs(translate) },
                    { translateY: translate } // Ensure translateY is positive
                ],
            }
        ]}></View>
    );
}

export default Shadow;

const styles = StyleSheet.create({
    shadowContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.4,
    },
});
