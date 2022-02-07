import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Pressable} from 'react-native';
import { IItem } from '../../../helpers/types'
import Item from '../../Shared/Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from '../../../helpers/types';
import styles from './Styles'

type Props = NativeStackScreenProps<RootStackParameters, 'ShowList'>

const DataScreen = ({navigation}: Props) => {
  const [clientList, setClientList] = useState<IItem[]>([]);

  const loadClients = async () => {
    const completeList = await AsyncStorage.getItem('clientList');
    setClientList(JSON.parse(completeList as string) || []);
  }

  useEffect(() => {
    loadClients();

    const unsubscribe = navigation.addListener('focus', () => {
      loadClients();
    });

    return unsubscribe;
  } , [navigation]);

  const delItem = async (id: string) => {
    try {
      const delList = clientList.filter((item) => {
        return item.id !== id
      });
      await AsyncStorage.setItem("clientList", JSON.stringify(delList));
      loadClients();
    } catch(e) {
      console.log(e)
    }
  }

  const editItem = async (selectedClient: any) => {
    try {
      navigation.navigate('Edit', {
        selectedClient
      })
    } catch(e) {
      console.log(e)
    }
  }
  
  return (
    <View>
      <View style={styles.contentWrapper}>    
        <FlatList
          data={clientList}
          keyExtractor={(name, index) => `${name.name}-${index}`}
          renderItem={({item}) => (
            <Item name={item.name} surname={item.surname} email={item.email} id={item.id} edit={editItem} del={delItem} />
          )}
        />
      </View>
      <View>
        <Pressable style={styles.button} onPress={() =>
          navigation.navigate('AddClient')
        }>
          <Text style={styles.buttonText}>Add New Client</Text>
        </Pressable>
      </View>  
    </View>
  );
};

export default DataScreen;