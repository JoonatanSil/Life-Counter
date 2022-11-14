import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";

const MenuItem = (props) => {
    const [buttonPressed, setButtonPressed] = useState(false)
    const [moneyAmount, setMoneyAmount] = useState(0)
    const [moneyDisplay, setMoneyDisplay] = useState(0)

    const plusMinus = (pressed) => {
        if (pressed === "plus") {
            setMoneyAmount(prev => (Math.round((prev + 0.2) * 100) / 100))
        } else if (pressed === "minus") {
            setMoneyAmount(prev => (Math.round((prev - 0.2) * 100) / 100))
        } else {
            console.log("Something went wrong while calculating debt");
        }
    }

    const handlePlusMinusPress = (pressed) => {
        plusMinus(pressed)
    }

    const plusMinusVisibility = () => {
        setButtonPressed(prev => !prev)
    }

    const handleButtonPress = () => {
        plusMinusVisibility()
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: "white", marginRight: 70 }}>
                Player name here -
            </Text>
            <View style={styles.debtButton} >
                {buttonPressed &&
                    <TouchableOpacity style={styles.debtButtonPlusMinus} onPress={() => handlePlusMinusPress("minus")}>
                        <Entypo
                            name={"minus"}
                        />
                    </TouchableOpacity>}
                <TouchableOpacity style={styles.debtButtonCenter} onPress={() => handleButtonPress()}>
                    <Text style={{ color: "white" }}>{moneyAmount} €</Text>
                </TouchableOpacity>
                {buttonPressed &&
                    <TouchableOpacity style={styles.debtButtonPlusMinus} onPress={() => handlePlusMinusPress("plus")}>
                        <Entypo
                            name={"plus"}
                        />
                    </TouchableOpacity>}

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center"
    },
    debtButton: {
        flexDirection: "row",
        alignItems: "center"
    },
    debtButtonCenter: {
        backgroundColor: "#0060A6",
        borderRadius: 10,
        padding: 10,
        margin: 3
    },
    debtButtonPlusMinus: {
        backgroundColor: "#0060A6",
        borderRadius: 10,
        padding: 10
    },

});

export default MenuItem;