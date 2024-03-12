import { StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarList from './src/components/CarsList';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
    <Header/>
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
