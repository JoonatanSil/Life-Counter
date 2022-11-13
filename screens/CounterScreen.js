import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import PlayerLife from '../components/PlayerLife';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CounterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Menu")}>
                <Text style={styles.menuButtonText}>Menulaattori</Text>
            </TouchableOpacity>
            <View styles={styles.lifeContainers}>
                <PlayerLife
                    color="yellow"
                />
                <PlayerLife
                    color="blue"
                />
                <PlayerLife
                    color="red"
                />

                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexWrap: "wrap",
        backgroundColor: "black",
    },
    menuButton: {
        paddingHorizontal: windowWidth * 0.5,
        paddingTop: windowHeight * 0.10,
    },
    lifeContainer: {
        flex: 2,
        flexWrap: "wrap",
        paddingHorizontal: windowWidth * 0.12,
    },
    menuButtonText: {
        color: "pink",
    },
});

export default CounterScreen;