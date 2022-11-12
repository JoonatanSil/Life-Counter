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
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: "#D9D9D9",
        height: windowHeight * 0.9,
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
    },
    header: {
        // fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 24,
        color: "#17A1FA",
        borderBottomWidth: 1,
        borderBottomColor: "#17A1FA",
        paddingBottom: 5,
        marginBottom: 10,
    },
    inputHeader: {
        padding: 15,
        width: "100%",
        borderWidth: 2,
        borderColor: "#17A1FA",
        borderRadius: 10,
    },
    inputBody: {
        padding: 15,
        width: "100%",
        height: "50%",
        borderWidth: 2,
        borderColor: "#17A1FA",
        textAlignVertical: "top",
        borderRadius: 10,
    },
    postButton: {
        padding: 15,
        width: "100%",
        backgroundColor: "#17A1FA",
        borderRadius: 10,
    },
    postButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center",
    },
});

export default CounterScreen;
