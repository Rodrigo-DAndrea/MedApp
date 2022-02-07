import React from 'react';
import { View } from 'react-native';
import RegisterClient from "./Register";
import styles from './Styles'

const RegisterScreen = () => {
  return (
    <View style = {styles.container}>
        <RegisterClient />
    </View>
  );
}

export default RegisterScreen