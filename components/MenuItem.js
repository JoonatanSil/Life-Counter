import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const MenuItem = (props) => {
    return (
        <View style={{}}>
            <TouchableOpacity>
                <Text style={{ color: "white" }}>
                    Click here to do thing!
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

});

export default MenuItem;