import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Create = ({ navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.overlayContent}>
      <Text style={styles.fintrackText}>FINTRACK</Text>
      <Image
        source={require('../assets/curve.png')}
        style={styles.curveImage}
      />

      <View style={styles.rectangle1}></View>
      <View style={styles.rectangle2}></View>
      <Image
          source={require('../assets/icon.png')} 
          style={styles.splashImage}
        />
      
      <TouchableOpacity
          style={styles.rectangle1}
          onPress={() => navigation.navigate('SignIN')}
        >
          <Text style={styles.signInText}>SignIN!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rectangle2}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signUpText}>SignUp!</Text>
        </TouchableOpacity>

      <Text style={styles.trackOrStayText}>
        Track or Stay Broke.{'\n'}Losers pick the second option.
      </Text>
      <Text style={styles.welcomeBackText}>Welcome Back!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 428,
    height: 1000,
    position: 'relative',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    overflow: 'hidden',
  },

  fintrackText: {
      left: 90,
      height: 56,
      position: 'absolute',
      width: 250,
      top: 210,
      fontSize: 60,
      fontFamily: 'Staatliches',
      color: 'white',
      textAlign: 'center',
      zIndex: 2,
  },
  image1: {
    width: 438,
    height: 444,
    position: 'absolute',
    left: -10,
    top: -30,
    opacity: 0.5,
  },
  rectangle1: {
    width: 285,
    height: 55,
    position: 'absolute',
    left: 72,
    top: 435,
    backgroundColor: 'rgba(40, 167, 69, 0)',
    borderRadius: 20,
    borderColor: '#F3F3F3',
    borderWidth: 2,
  },
  rectangle2: {
    width: 285,
    height: 55,
    position: 'absolute',
    left: 72,
    top: 529,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  splashImage: {
    width: 87,
    height: 95,
    position: 'absolute',
    left: 171,
    top: 124,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  signInText: {
    position: 'absolute',
    left: 115,
    bottom: 13,
    color: 'white',
    fontSize: 25,
    fontFamily: 'Staatliches',
    lineHeight: 25,
    letterSpacing: 0.2,
  },
  signUpText: {
    position: 'absolute',
    left: 115,
    bottom: 13,
    color: 'black',
    fontSize: 25,
    fontFamily: 'Staatliches',
    lineHeight: 25,
    letterSpacing: 0.2,
  },
  trackOrStayText: {
    width: 293,
    height: 100,
    position: 'absolute',
    left: 72,
    top: 790,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'SreeKrushnadevaraya', 
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.2,
  },

  trackOrStayText: {
    left: 72,
    position: 'absolute',
    top: 730,
    width: 293,
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'SreeKrushnadevaraya',
    color: 'black',
    lineHeight: 25,
    letterSpacing: 0.2,
  },

  welcomeBackText: {
    left: 72,
    height: 62,
    position: 'absolute',
    top: 370,
    width: 293,
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'SreeKrushnadevaraya',
    color: 'black',
  },
});

export default Create;
