import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Navigate to Home screen
    navigation.navigate('Main');
  };

  const handleSignUp = () => {
    // Navigate to SignUp screen
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/curve.png')} style={styles.curveImage} />
      <Image source={require('../assets/icon.png')} style={styles.splashImage} />
      <Text style={styles.helloText}>Hello{"\n"}Sign in!</Text>

      <View style={styles.whiteBackground} />

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpContainer} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.dontHaveAccountText}>Don’t have an Account?</Text>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gmail</Text>
        <TextInput style={styles.input} placeholder="" placeholderTextColor="#000" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="" placeholderTextColor="#000" secureTextEntry />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 428,
    height: 926,
    position: 'relative',
    backgroundColor: 'linear-gradient(131deg, #DEFF59 20%, #61E224 90%)', // Use gradient from a library like 'react-native-linear-gradient'
    borderRadius: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: 438,
    height: 444,
    position: 'absolute',
    left: -10,
    top: -30,
    opacity: 0.50,
  },
  splashImage: {
    width: 42,
    height: 54,
    position: 'absolute',
    left: 300,
    top: 100,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  helloText: {
    width: 194,
    position: 'absolute',
    justifyContent: 'Left', 
    left: 29,
    top: 107,
    color: 'black',
    fontSize: 30,
    fontFamily: 'SreeKrushnadevaraya',
    fontWeight: '500',
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  whiteBackground: {
    width: 428,
    height: 765,
    position: 'absolute',
    top: 229,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  forgotPasswordContainer: {
    position: 'absolute',
    top: 525,
    left: 250, 
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'SreeKrushnadevaraya',
    fontWeight: '400',
    lineHeight: 30,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  signUpContainer: { // New container for Sign Up button
    position: 'absolute',
    left: 315,
    top: 860,
  },
  signUpText: { // Reuse for text style
    color: 'black',
    fontSize: 20,
    fontFamily: 'SreeKrushnadevaraya',
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0.2,
  },
  dontHaveAccountText: {
    position: 'absolute',
    left: 237,
    top: 830,
    color: 'rgba(0, 0, 0, 0.70)',
    fontSize: 19,
    fontFamily: 'SreeKrushnadevaraya',
    fontWeight: '400',
    lineHeight: 30,
    letterSpacing: 0.19,
  },
  signInButton: {
    width: 285,
    top: 580,
    height: 55,
    backgroundColor: '#61E224', 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Staatliches',
    fontWeight: '400',
    lineHeight: 25,
    letterSpacing: 0.25,
  },
  inputContainer: {
    width: 310,
    height: 127,
    position: 'absolute',
    left: 64,
    top: 350,
  },
  label: {
    color: '#61E224',
    fontSize: 18,
    fontFamily: 'SreeKrushnadevaraya',
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0.18,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default SignInScreen;
