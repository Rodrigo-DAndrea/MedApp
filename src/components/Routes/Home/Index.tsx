import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View} from "react-native";
import { RootStackParameters } from '../../../helpers/types'
import styles from './Styles'

type Props = NativeStackScreenProps<RootStackParameters, 'Home'>

const HomeScreen = ({navigation}: Props) => {

  return (
    <View style={styles.content}>
      <View style={styles.content2}>
        <Text style={styles.text}>Medical App</Text>
      </View>
      <Pressable style={styles.button} onPress={() =>
        navigation.navigate('Login')
      }>
        <Text style={styles.buttonText} >Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() =>
        navigation.navigate('Register')
      }>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;