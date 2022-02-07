
import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginClient from "./Login";

const LoginScreen = () => {
  return (
    <View style = {styles.container}>
        <LoginClient />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width:"100%",
    height: "100%"
  },
});

export default LoginScreen