import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import Header from './src/components/Header';
import AddItem, {IItem} from './src/components/AddItem';
import Item from './src/components/Item';
const App = () => {
  const [clientList, setClientList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Medical App" />
      <View style={styles.contentWrapper}>
        <AddItem
          setClientList={setClientList}
          clientList={clientList}
        />
        <FlatList
          data={clientList}
          keyExtractor={(name, index) => `${name.name}-${index}`}
          renderItem={({item}) => (
            <Item name={item.name} surname={item.surname} email={item.email} id={item.id} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default App;
