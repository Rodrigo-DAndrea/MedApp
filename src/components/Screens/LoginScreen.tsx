import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import Header from '../Header';
import AddItem, {IItem} from '../AddItem';
import Item from '../Item';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginClient from "../Login";
import { RootStackParameters } from '../help/types'
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const LoginScreen = () => {
  return (
    <View style = {styles.container}>
        <LoginClient />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width:"100%",
    height: "100%"
  },
});

export default LoginScreen