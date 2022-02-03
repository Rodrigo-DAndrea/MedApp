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
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParameters, IRegister } from './help/types'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';

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
        const registeredClients = await AsyncStorage.getItem("clientRegister") || [];
        const newRegister = [
          ...registeredClients,
          {
            nickName,
            password,
          },
        ]
        AsyncStorage.setItem("clientRegister", JSON.stringify(newRegister));
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

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  email: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addClientButton: {
    backgroundColor: '#000FFF',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '500' },
});

export default RegisterClient;
