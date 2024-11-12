import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Overview = ({ navigation }) => {

  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={handleMenuPress}>
        <Icon name="menu-outline" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Overview Screen</Text>
      
      
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
    left: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Overview;
