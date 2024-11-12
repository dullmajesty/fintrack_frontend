import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const Notification = ({ navigation }) => {
  // Example function to go back to the previous screen
  const handleGoBack = () => {
    navigation.goBack(); // Navigates back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Page</Text>
      <Text style={styles.text}>This is where your notifications will be displayed.</Text>
      <Button title="Go Back" onPress={handleGoBack} />
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
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Notification;
