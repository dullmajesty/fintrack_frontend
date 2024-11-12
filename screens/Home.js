import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  // Function to handle navigation to the Notification page
  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };

  // Function to handle navigation to the Menu page
  const handleMenuPress = () => {
    navigation.navigate('Menu'); // Ensure 'Menu' is a defined route in your navigation stack
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={handleMenuPress}>
        <Icon name="menu-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notificationContainer} onPress={handleNotificationPress}>
        <Icon name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Home Screen</Text>
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
  notificationContainer: {
    position: 'absolute',
    top: 10,
    right: 10, // Positioned on the top-right side
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
