import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import PlayerLife from '../components/PlayerLife';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CounterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Menu")}>
                <Text style={styles.menuButtonText}>Menu</Text>
            </TouchableOpacity>
            <View style={styles.lifeContainer}>
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
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: "black",
    },
    menuButton: {
        paddingHorizontal: windowWidth * 0.05,
        paddingTop: windowHeight * 0.10,
    },
    lifeContainer: {
        flex: 1,
        flexWrap: "wrap",
        paddingHorizontal: windowWidth * 0.05,
    },
    menuButtonText: {
        color: "white",
    },
});

export default CounterScreen;