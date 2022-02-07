import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    addClientButton: {
      backgroundColor: '#000FFF',
      paddingVertical: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
        width:"100%",
        height: "100%"
      },
    buttonText: { color: '#fff', fontWeight: '500' },
  });

  export default styles