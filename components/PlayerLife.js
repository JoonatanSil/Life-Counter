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
        width: windowWidth / 2.2,
        height: windowHeight / 2.2,
        justifyContent: "center",
    },
    lifeAmount: {
        color: "green",
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
    },
});
export default PlayerLife;