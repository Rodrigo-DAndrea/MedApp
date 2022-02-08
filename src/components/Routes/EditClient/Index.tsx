import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import Header from '../../Shared/Header';
import EditItem from './EditItem';
import { IItem } from '../../../helpers/types'
import Item from '../../Shared/Item';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from '../../../helpers/types';
import styles from './Styles';

type Props = NativeStackScreenProps<RootStackParameters, 'Edit'>

const EditScreen = ({route, navigation}: Props) => {

  const { userName, userSurname, userEmail, userId } = route.params;

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
        <EditItem 
          setClientList={setClientList}
          clientList={clientList}
          oldName={userName}
          oldSurname={userSurname}
          oldEmail={userEmail}
          oldId={userId}
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


export default EditScreen;