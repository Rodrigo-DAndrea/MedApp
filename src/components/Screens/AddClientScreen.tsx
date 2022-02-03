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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from '../help/types';

type Props = NativeStackScreenProps<RootStackParameters, 'AddClient'>

const AddScreen = ({navigation}: Props) => {

  const [clientList, setClientList] = useState<IItem[]>([]);

  const loadClients = async () => {
    const completeList = await AsyncStorage.getItem('clientList');
    setClientList(JSON.parse(completeList as string) || []);
  }

  useEffect(() => {
    loadClients();
  } , []);

  return (
    <View style={styles.container}>
      <Header title="Medical App" />
      <FlipperAsyncStorage />
      <View style={styles.contentWrapper}>
        <AddItem
          setClientList={setClientList}
          clientList={clientList}
        />
        {/* <FlatList
          data={clientList}
          keyExtractor={(name, index) => `${name.name}-${index}`}
          renderItem={({item}) => (
            <Item 
              name={item.name} 
              surname={item.surname}
              email={item.email} 
              id={item.id}
              del={removeItem}
            />
          )}
        /> */}
      </View>
      <View>
        <Pressable style={styles.button} onPress={() =>
            navigation.navigate('Data')
          }>
          <Text style={styles.buttonText}>Complete Data</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'indigo',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontWeight: '500',
  }
});


export default AddScreen;