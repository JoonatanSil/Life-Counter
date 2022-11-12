import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Dimensions, TouchableOpacity } from "react-native";

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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default CounterScreen;
