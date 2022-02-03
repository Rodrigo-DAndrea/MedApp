import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Text, Pressable} from 'react-native';
import Header from '../Header';
import AddItem, {IItem} from '../AddItem';
import Item from '../Item';
import AddNewClient from '../AddItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from '../help/types';

type Props = NativeStackScreenProps<RootStackParameters, 'Data'>

const DataScreen = ({navigation}: Props) => {
    const [clientList, setClientList] = useState<IItem[]>([]);

    const loadClients = async () => {
      const completeList = await AsyncStorage.getItem('clientList');
      setClientList(JSON.parse(completeList as string) || []);
    }

    useEffect(() => {
      loadClients();
    } , []);

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

    const editItem = async (id: string) => {
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

  const styles = StyleSheet.create({
    content: {
      justifyContent: 'center',
      height: '100%',
    },
    contentWrapper: {
      padding: 20,
      height: '85%%',  
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
    },
    text: {
      margin: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'indigo',
    }
  });

  export default DataScreen;