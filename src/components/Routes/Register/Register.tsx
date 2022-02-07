import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParameters, IRegister } from '../../../helpers/types'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import styles from './Styles'

type NavigationProps = NativeStackNavigationProp<RootStackParameters, 'Register'>;

const RegisterClient = () => {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const setRegister = async () => {
    if (!nickName || !password) {
      Alert.alert('You need to complete all fields');
    } else {
      try {
        const registeredClients = await AsyncStorage.getItem("clientRegister");
        const currentData = JSON.parse(registeredClients as string) || [];
        const newRegister = [
          ...currentData,
          {
            nickName,
            password,
          },
        ]
        await AsyncStorage.setItem("clientRegister", JSON.stringify(newRegister));
        const pepe = await AsyncStorage.getItem("clientRegister");
        setNickName('');
        setPassword('');
        navigation.navigate("Login");
      } catch (e: any) {
        Alert.alert(e);
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
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
            <TouchableOpacity style={styles.addClientButton} onPress={setRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterClient;
