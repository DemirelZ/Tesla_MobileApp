import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarItem from './src/components/CarItem';


const App = () => {
  return (
    <View style={styles.container}>
      <CarItem>
     
      </CarItem>

      

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
