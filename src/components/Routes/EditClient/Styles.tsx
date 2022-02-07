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
    heading: {
			fontSize: 20,
			fontWeight: '700',
		},
		form: {
			marginTop: 30,
		},
		input: {
			padding: 15,
			borderColor: 'rgba(0, 0, 0, 0.2)',
			borderWidth: 1,
			borderRadius: 5,
			marginBottom: 20,
		},
		email: {
			padding: 15,
			borderColor: 'rgba(0, 0, 0, 0.2)',
			borderWidth: 1,
			borderRadius: 5,
			marginBottom: 20,
		},
  });

  export default styles