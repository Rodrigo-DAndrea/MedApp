import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from './components/Routes/AddClient/Index';
import EditScreen from './components/Routes/EditClient/Index';
import DataScreen from './components/Routes/ShowList/Index';
import LoginScreen from './components/Routes/Login/Index';
import HomeScreen from './components/Routes/Home/Index';
import RegisterScreen from './components/Routes/Register/Index';

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
            name="Edit"
            component={EditScreen}
          />
          <Stack.Screen 
            name="ShowList" 
            component={DataScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    );
};

export default RouteComponent;