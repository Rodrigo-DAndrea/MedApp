import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import {IItem} from '../../helpers/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props extends IItem {
  del: (id: string) => void
  edit: (name: string, surname: string, email:string, id: string) => void
}


const Item: React.FC<Props> = ({name, surname, email, id, edit, del}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{name} {surname}</Text>
        <Text style={styles.itemText}>Email: {email}</Text>
        <Text style={styles.itemText}>Id: {id}</Text>
      </View>
      <Pressable style={styles.edit} onPress={() => edit(name, surname, email, id)}>
        <Text style={styles.buttonText}>Edit</Text>
      </Pressable>
      <Pressable style={styles.del} onPress={() => del(id)}>
        <Text style={styles.buttonText}>Del</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

  },
  itemText: {
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    width: '100%',
    justifyContent: 'space-between',
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  edit: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  del: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontWeight: '500',
  }
});
export default Item;
