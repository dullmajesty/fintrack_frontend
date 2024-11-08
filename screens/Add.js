import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Add = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Add;
