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
<<<<<<< HEAD
      <Text style={{ color: 'white', marginRight: 70 }}>Pelaajan nimi -</Text>
      <TouchableOpacity style={styles.debtButton}>
        <Text style={{ color: 'black' }}>5,20£</Text>
=======
      <Text style={{ color: 'white', marginRight: 70 }}>
        Player name here -
      </Text>
      <TouchableOpacity style={styles.debtButton}>
        <Text style={{ color: 'white' }}>7,00€</Text>
>>>>>>> konflikti
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
<<<<<<< HEAD
    backgroundColor: '#008899',
    borderRadius: 2,
    padding: 8,
=======
    backgroundColor: '#0060A6',
    borderRadius: 10,
    padding: 10,
>>>>>>> konflikti
  },
});

export default MenuItem;
