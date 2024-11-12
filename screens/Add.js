import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Add = ({ navigation }) => {

  const handleMenuPress = () => {
    navigation.navigate('Menu'); // Ensure 'Menu' is a defined route in your navigation stack
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.menuContainer} onPress={handleMenuPress}>
        <Icon name="menu-outline" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Add Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  menuContainer: {
    position: 'absolute',
    top: 10,
    left: 10, // Positioned on the top-left side
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Add;
