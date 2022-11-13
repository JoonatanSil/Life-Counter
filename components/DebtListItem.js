import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const MenuItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', marginRight: 70 }}>
        Player name here -
      </Text>
      <TouchableOpacity style={styles.debtButton}>
        <Text style={{ color: 'white' }}>7,00€</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  debtButton: {
    backgroundColor: '#0060A6',
    borderRadius: 10,
    padding: 10,
  },
});

export default MenuItem;
