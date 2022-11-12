import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AddJournalModal(props) {
    const [header, onChangeHeader] = useState();
    const [text, onChangeText] = useState();
    const [journalEntry, setJournalEntry] = useState({ header: "", body: "" });

    const createJournalEntry = () => {
        // https://www.w3schools.com/js/js_objects.asp
        // some clever setter function here
        // setJournalEntry(() => )
        props.handleJournalEntry(journalEntry)
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.showModal}
            onRequestClose={() => props.modalVisibility()}
        >
            <View style={styles.container}>
                {/* BACK BUTTON */}
                <TouchableOpacity onPress={() => props.modalVisibility()}>
                    <Ionicons
                        name="chevron-back"
                        size={30}
                        color={"black"} />
                </TouchableOpacity>

                <Text style={styles.header}>Kirjoita päiväkirjaan</Text>
                import React, {useState} from 'react';
                import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
                import AddJournalModal from '../components/AddJournalModal';

                export default function JournalScreen() {
    const [journalList, setJournalList] = useState([]);
                const [showModal, setShowModal] = useState(false);

    const modalVisibility = () => setShowModal(!showModal);

    const handleJournalEntry = (text) => setJournalList(listItems => [...listItems, text])

                return (
                <View style={styles.container}>
                    <Text>Päiväkirjat tähän!</Text>
                    {journalList.map((element) =>
                        <View style={styles.journal}>
                            <Text style={styles.journalText}>{element}</Text>
                        </View>
                    )}

                    <TouchableOpacity
                        onPress={() => modalVisibility()}
                        style={styles.addJournalButton}
                    >
                        <Text>Add new journal (modal)</Text>
                    </TouchableOpacity>
                    <AddJournalModal
                        showModal={showModal}
                        modalVisibility={modalVisibility}
                        handleJournalEntry={handleJournalEntry}
                    />
                </View>
                );
}

                const styles = StyleSheet.create({
                    container: {
                    flex: 1,
                backgroundColor: '#fff',
                alignItems: "center",
    },
                journal: {
                    borderWidth: 2,
                borderColor: "#000"
    },
                journalText: {
                    fontSize: 18,
    },
                addJournalButton: {
                    width: 150,
                borderWidth: 2,
                borderColor: "blue",
    },
});
                <TextInput
                    style={styles.inputHeader}
                    onChangeText={onChangeHeader}
                    value={header}
                    placeholder={"Otsikko"}
                />

                <TextInput
                    style={styles.inputBody}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={"Teksti"}
                    multiline={true}
                />

                <Text>TODO: Yksityinen</Text>

                <TouchableOpacity
                    style={styles.postButton}
                    onPress={() => createJournalEntry()}
                >
                    <Text style={styles.postButtonText}>JULKAISE</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

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
        width: windowWidth * 0.43,
        height: windowHeight * 0.43,
        justifyContent: "center",
        marginHorizontal: windowWidth * 0.01,
        marginVertical: windowHeight * 0.01,
    },
    lifeAmount: {
        color: "green",
        fontWeight: "bold",
        fontSize: windowWidth * 0.17,
        textAlign: "center",
    },
});
export default PlayerLife;