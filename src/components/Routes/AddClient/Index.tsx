import React, {useState, useEffect} from 'react';
import {View, Pressable, Text} from 'react-native';
import Header from '../../Shared/Header';
import AddItem from '../../Shared/AddItem';
import { IItem } from '../../../helpers/types'
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from '../../../helpers/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles'

type Props = NativeStackScreenProps<RootStackParameters, 'AddClient'>

const AddClient = ({navigation}: Props) => {

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
      </View>
      <View>
        <Pressable style={styles.button} onPress={() =>
            navigation.navigate('ShowList')
          }>
          <Text style={styles.buttonText}>Complete Data</Text>
        </Pressable>
      </View>
    </View>
  );
};



export default AddClient;