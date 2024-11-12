import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import WelcomePage from './screens/WelcomePage';
import Create from './screens/Create';
import SignUp from './screens/SignUp';
import SignIN from './screens/SignIN';
import Home from './screens/Home';
import Overview from './screens/Overview';
import Add from './screens/Add';
import TipsAndTricks from './screens/TipsAndTricks';
import ChatSupport from './screens/ChatSupport';
import Notification from './screens/Notification';
import Menu from './screens/Menu'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        top: -40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 20,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 65,
          height: 65,
          borderRadius: 32.5,
          backgroundColor: '#4CAF50',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        height: 90,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
      },
      tabBarItemStyle: {
        paddingTop: 25, // Adjust this value to move icons down
      },
    }}
  >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home-outline" size={28} color={focused ? "#4CAF50" : "#888"} />
          ),
        }}
      />
      <Tab.Screen
        name="Overview"
        component={Overview}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="stats-chart-outline" size={28} color={focused ? "#4CAF50" : "#888"} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: () => (
            <Ionicons name="add" size={36} color="#ffffff" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="TipsAndTricks"
        component={TipsAndTricks}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="bulb-outline" size={28} color={focused ? "#4CAF50" : "#888"} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatSupport"
        component={ChatSupport}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="chatbubbles-outline" size={28} color={focused ? "#4CAF50" : "#888"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Create" component={Create} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignIN" component={SignIN} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false}} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false}} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
