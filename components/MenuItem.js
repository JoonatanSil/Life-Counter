import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const MenuItem = (props, { navigation }) => {
    return (
        <View style={{}}>
            <TouchableOpacity onPress={() => props.navigation.navigate(props.destination)}>
                <Text style={{ color: "white" }}>
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

});

export default MenuItem;