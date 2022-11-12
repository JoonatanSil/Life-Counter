import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerLife = (props) => {
    return (
        <View style={{ ...styles.playerCounter, borderColor: props.color }}>
            <Text style={{ ...styles.lifeAmount, color: props.color }}>
                40
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    playerCounter: {
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "green",
        width: windowWidth * 0.43,
        height: windowHeight * 0.43,
        justifyContent: "center",
        marginHorizontal: windowWidth * 0.01,
        marginVertical: windowHeight * 0.01,
    },
    lifeAmount: {
        color: "green",
        fontWeight: "bold",
        fontSize: windowWidth * 0.17,
        textAlign: "center",
    },
});
export default PlayerLife;