import React from "react";
import {StyleSheet} from 'react-native';

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

export default styles