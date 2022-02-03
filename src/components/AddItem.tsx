import React, {useState} from 'react';
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


export interface IItem {
  name: string;
  surname: string;
  email: String;
  id: string;
}

interface Props {
  setClientList: React.Dispatch<React.SetStateAction<IItem[]>>;
  clientList: IItem[];
}

const AddNewClient: React.FC<Props> = ({ clientList, setClientList }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const addClient = () => {
    if (!name || !surname || !email) {
      Alert.alert('You need to complete all fields');
    } else {
      const newList = [
        ...clientList,
        {
          name,
          surname,
          email,
          id: id || '1',
        },
      ]
      setClientList(newList);
      AsyncStorage.setItem("clientList", JSON.stringify(newList));
      setName('');
      setSurname('');
      setEmail('');
      setId('');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.heading}>Add Client</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            /> 
            <TextInput
              style={styles.input}
              placeholder="Surname"
              value={surname}
              onChangeText={text => setSurname(text)}
            />
            <TextInput
              style={styles.email}
              placeholder="Email"
              autoCapitalize='none'
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter ID"
              keyboardType="numeric"
              value={id}
              onChangeText={q => setId(q)}
            />
            <TouchableOpacity style={styles.button} onPress={addClient}>
              <Text style={styles.buttonText}>Add Client</Text>
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
  button: {
    backgroundColor: 'indigo',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});

export default AddNewClient;
