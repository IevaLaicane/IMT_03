import 'react-native-gesture-handler';
import { Component } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import EndScreen from './components/EndScreen';
import FQuestion from './components/FQuestion';
import SQuestion from './components/SQuestion';
import TQuestion from './components/TQuestion';
import 'react-native-gesture-handler';
import { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import BackHandler from 'react-native';
import { enableScreens } from 'react-native-screens';
import RNExitApp from 'react-native-exit-app';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="End" component={EndScreen} />
        <Stack.Screen name="First" component={FQuestion} />
        <Stack.Screen name="Second" component={SQuestion} />
        <Stack.Screen name="Third" component={TQuestion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
