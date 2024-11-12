import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const menuItems = [
  { key: '1', label: 'Profile', icon: 'person-outline', color: '#f4a261' },
  { key: '2', label: 'Reminder', icon: 'time-outline', color: '#2a9d8f' },
  { key: '3', label: 'Language', icon: 'globe-outline', color: '#e9c46a' },
  { key: '4', label: 'Activity', icon: 'star-outline', color: '#e76f51' },
  { key: '5', label: 'Send Feedback', icon: 'paper-plane-outline', color: '#8d99ae' },
  { key: '6', label: 'Report Problem', icon: 'alert-outline', color: '#ef476f' },
  { key: '7', label: 'FAQs', icon: 'help-circle-outline', color: '#118ab2' },
];

const Menu = ({ navigation }) => {
  const handlePress = (label) => {
    alert(`Navigating to ${label}`);
  };

  const handleBackToHome = () => {
    navigation.navigate('Main', { screen: 'Home' });
  }

  const handleBackToOverview = () => {
    navigation.navigate('Main', { screen: 'Overview' });
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Icon name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Settings</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem} onPress={() => handlePress(item.label)}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              <Icon name={item.icon} size={20} color="#fff" />
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Icon name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 50,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 85, 
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#e0e0e0',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
  },
});

export default Menu;
