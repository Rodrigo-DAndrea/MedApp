import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  InteractionManager,
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { RootStackParameters, ILogin } from '../../../helpers/types'
import styles from './Styles'

type NavigationProps = NativeStackNavigationProp<RootStackParameters, 'Login'>;

const LoginClient = () => {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const setLogin = async () => {
    if (!nickName || !password) {
      Alert.alert('You need to complete all fields');
    } else {
      try {
        const completeList = await AsyncStorage.getItem('clientRegister');
        const currentData: ILogin[] = JSON.parse(completeList as string) || [];
        const matchItem = currentData.find((item) => {
            return item.nickName === nickName && item.password === password
        });
        if (matchItem) {
          navigation.navigate("ShowList")
        } else {
          Alert.alert('Error')
        }
      } catch(e) {
        console.log(e)
      }
      setNickName('');
      setPassword('');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.heading}>Login</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="User"
              value={nickName}
              onChangeText={text => setNickName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.addClientButton} onPress={setLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginClient;
