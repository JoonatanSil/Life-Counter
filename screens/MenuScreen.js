import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from 'react-native';
import MenuItem from '../components/MenuItem';
import PlayerLife from '../components/PlayerLife';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MenuScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <MenuItem name={"Counter"} destination={"Counter"} navigation={navigation} />
            <MenuItem name={"Debt"} destination={"Debt"} navigation={navigation} />
            <MenuItem />
            <MenuItem />
            <MenuItem />
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

export default MenuScreen;