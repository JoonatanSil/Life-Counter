import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Dimensions,
    Pressable,
} from "react-native";
import MenuItem from "../components/MenuItem";
import PlayerLife from "../components/PlayerLife";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MenuScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{ color: "lightgray", fontSize: 30, marginBottom: 40 }}
            >
                ⛛ LIFE COUNTER ⛛
            </Text>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Counter")}
            >
                <Text style={{ color: "lightgray", fontSize: 20 }}>
                    COUNTER
                </Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Debt")}
            >
                <Text style={{ color: "lightgray", fontSize: 20 }}>DEBT</Text>
            </Pressable>
            {/* <MenuItem
                name={"Counter"}
                destination={"Counter"}
                navigation={navigation}
            />
            <MenuItem
                name={"Debt"}
                destination={"Debt"}
                navigation={navigation}
            /> */}
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: windowWidth * 0.05,
        paddingTop: windowHeight * 0.1,
    },
    button: {
        borderWidth: 3,
        borderColor: "lightgray",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        margin: 20,
        marginBottom: 50,
        width: 320,
    },
});

export default MenuScreen;
