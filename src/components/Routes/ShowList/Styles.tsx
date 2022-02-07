import { StyleSheet } from "react-native";

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

export default styles
