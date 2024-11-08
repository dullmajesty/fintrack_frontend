import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Overview = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Overview;
