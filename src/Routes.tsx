import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from './components/Screens/AddClientScreen';
import DataScreen from './components/Screens/DataScreen';
import LoginScreen from './components/Screens/LoginScreen';
import HomeScreen from './components/Screens/HomeScreen';
import RegisterScreen from './components/Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const RouteComponent = () => {
    return (
      <View style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            name="AddClient"
            component={AddScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen 
            name="Data" 
            component={DataScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    );
};

export default RouteComponent;