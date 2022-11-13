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
      <Text style={{ color: 'white', marginRight: 70 }}>Pelaajan nimi -</Text>
      <TouchableOpacity style={styles.debtButton}>
        <Text style={{ color: 'black' }}>5,20£</Text>
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
    backgroundColor: '#008899',
    borderRadius: 2,
    padding: 8,
  },
});

export default MenuItem;
