import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RouteComponent from './src/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {

  return (
    <SafeAreaProvider>
      <RouteComponent />
    </SafeAreaProvider>
  )
};


export default App;
