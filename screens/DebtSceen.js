import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Dimensions, TouchableOpacity, TextInput, ScrollView } from "react-native";
import DebtListItem from '../components/DebtListItem';
import { Entypo } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CounterScreen = ({ navigation }) => {
    const [players, setPlayers] = useState(["Juuso", "Jesse", "Joonatan"]) //List of players who are added to debt list
    const [addPlayerVisibility, setAddPlayerVisibility] = useState(false) //Visibility of the TextInput to add new players
    const [playerName, setPlayerName] = useState("")

    const addPlayer = (newPlayer) => {
        setPlayers(array => [...array, newPlayer])
        setPlayerName("")
        setAddPlayerVisibility(prev => !prev)
        console.log(players);
    }

    const playerAddVisibility = () => {
        setAddPlayerVisibility(prev => !prev)
    }

    //Opens the text input to add a new player, if the field is left empty it just closes, if there is 
    //a string in the field, new player is added with the string as its name and then the form resests and closes
    const handleAddButtonPress = (value) => {
        if (playerName === "") {
            playerAddVisibility()
        } else {
            addPlayer(value)
        }

    }

    //Goes trough the players array and returns a DebtListItem for each
    const fillDebtBox = () => {
        return (
            players.map((player) => {
                return (
                    <DebtListItem
                        name={player}
                    />
                )
            })
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Menu")}>
                    <Text style={styles.menuButtonText}>{"<-- "}Menu</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Debt</Text>
            </View>
            <ScrollView style={{}}>
                <View style={styles.debtListContainer}>
                    {fillDebtBox()}
                </View>
            </ScrollView>
            {/* Brings the plusbutton up when the textInput is not visible and makes the debt list cut out at a correct spot regardless of textInput visibility */}
            <View style={!addPlayerVisibility ? { ...styles.addPlayerContainer, marginTop: 29, paddingBottom: 35 } : styles.addPlayerContainer}>
                {addPlayerVisibility &&
                    <TextInput
                        style={styles.inputField}
                        placeholder="Lisää pelaaja"
                        value={playerName}
                        onChangeText={(value) => setPlayerName(value)}
                    />}
                <TouchableOpacity onPress={() => handleAddButtonPress(playerName)}>
                    <Entypo
                        name={"circle-with-plus"}
                        color={"#0060A6"}
                        size={36}
                        style={styles.addPlayerButton}
                    />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        // paddingHorizontal: windowWidth * 0.05,
        // paddingTop: windowHeight * 0.05,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        margin: 50,
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 36
    },
    debtListContainer: {
        alignSelf: "center",
        flexDirection: "column",
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
    addPlayerContainer: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center"
    },
    inputField: {
        backgroundColor: "white",
        width: windowWidth * 0.55,
        height: 40,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10,
        padding: 10
    },
    addPlayerButton: {
        marginLeft: 5
    },
});
export default CounterScreen;
