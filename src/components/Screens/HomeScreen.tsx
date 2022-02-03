import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View} from "react-native";
import { RootStackParameters } from '../help/types'

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

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    height: '100%',
  },
  content2: {
    justifyContent: 'center',
    alignItems: 'center',
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
})

export default HomeScreen;