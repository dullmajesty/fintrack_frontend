import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatSupport = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Support</Text>
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

export default ChatSupport;


