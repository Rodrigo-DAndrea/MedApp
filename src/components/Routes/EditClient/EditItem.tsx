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
import styles from './Styles';
import { IItem } from '../../../helpers/types'

interface Props {
  setClientList: React.Dispatch<React.SetStateAction<IItem[]>>;
  clientList: IItem[];
  oldName: string;
  oldSurname: string;
  oldEmail: string;
  oldId: string;
}

const EditClient: React.FC<Props> = ({ clientList, setClientList, oldName, oldSurname, oldEmail, oldId }) => {

  const [name, setName] = useState(oldName);
  const [surname, setSurname] = useState(oldSurname);
  const [email, setEmail] = useState(oldEmail);
  const [id, setId] = useState(oldId);

  const editClient = () => {
    if (!name || !surname || !email) {
      Alert.alert('You need to complete all fields');
    } else {

      const oldClient = clientList.findIndex(client => client.id === oldId );
      clientList.splice(oldClient);

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
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        
          <Text style={styles.heading}>Edit Client</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder='Name'
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
            <TouchableOpacity style={styles.button} onPress={editClient}>
              <Text style={styles.buttonText}>Save Client</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


export default EditClient;
