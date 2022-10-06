import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from 'react-native';
import PlayerLife from '../components/PlayerLife';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CounterScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <PlayerLife
                color="green"
            />
            <PlayerLife
                color="blue"
            />
            <PlayerLife
                color="red"
            />
            <PlayerLife
                color="yellow"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: "black",
        paddingHorizontal: windowWidth * 0.05,
        paddingTop: windowHeight * 0.10,
    },
});

export default CounterScreen;