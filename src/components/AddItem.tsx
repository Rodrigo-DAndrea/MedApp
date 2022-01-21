import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
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
const AddClient: React.FC<Props> = ({clientList, setClientList}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const addClient = () => {
    if (!name) {
      Alert.alert('No name!', 'You need to enter an name');
    } else {
      setClientList([
        ...clientList,
        {
          name,
          surname,
          email,
          id: id || '1',
        },
      ]);
      setName('');
      setSurname('');
      setEmail('');
      setId('');
    }
  };
  return (
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
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter ID"
          keyboardType="numeric"
          value={id}
          onChangeText={q => {
            setId(q);
          }}
        />
        <TouchableOpacity style={styles.addClientButton} onPress={addClient}>
          <Text style={styles.buttonText}>Add Client</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  addClientButton: {
    backgroundColor: '#000FFF',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddClient;
