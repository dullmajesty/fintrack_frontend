import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useFonts } from 'expo-font';

export default function WelcomePage() {
  const navigation = useNavigation(); 

  const [loaded] = useFonts({
    Staatliches: require('../assets/Staatliches-Regular.ttf'),
    SreeKrushnadevaraya: require('../assets/SreeKrushnadevaraya-Regular.ttf'),
  });

  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/curve.png')}
        style={styles.curveImage}
      />

      <View style={styles.overlayContent}>
        <Image
          source={require('../assets/icon.png')} 
          style={styles.splashImage}
        />

        <Text style={styles.title}>FINTRACK</Text>
        <Text style={styles.subtitle}>Track or Stay Broke.{'\n'}Losers pick the second option.</Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Create')}
        >
          <Text style={styles.buttonText}>GET STARTED!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  curveImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, 
    zIndex: 1, 
  },
  splashImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -100,
  },
  title: {
    fontSize: 70,
    fontFamily: 'Staatliches',
    color: '#fff', 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'SreeKrushnadevaraya',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000000',
    marginTop: -15,
  },
  buttonContainer: {
    marginTop: 170,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#00A651', 
    borderRadius: 20,
    position: 'absolute',
    top: 435,
    left: 72,
    width: 285,
    height: 55,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
    fontFamily: 'Staatliches',
    textAlign: 'center',
  
  },
});
