import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Dimensions, TouchableOpacity } from "react-native";
import DebtListItem from '../components/DebtListItem';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CounterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Menu")}>
                    <Text style={styles.menuButtonText}>{"<-- "}Menu</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Debt</Text>
            </View>
            <View style={styles.debtListContainer}>
                <DebtListItem />
                <DebtListItem />
                <DebtListItem />
                <DebtListItem />
                <DebtListItem />
                <DebtListItem />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: windowWidth * 0.05,
        paddingTop: windowHeight * 0.05,
        paddingBottom: 300
    },
    header: {
        flex: 1,
        flexDirection: "row",
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 36
    },
    debtListContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    debtListText: {
        color: "white"
    },
    menuButton: {
        paddingHorizontal: windowWidth * 0.05,
        //paddingTop: windowHeight * 0.10,
    },
    menuButtonText: {
        paddingHorizontal: windowWidth * 0.05,
        //paddingTop: windowHeight * 0.10,
        color: "white",
    },
});
export default CounterScreen;
