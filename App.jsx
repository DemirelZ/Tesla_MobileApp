import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarList from './src/components/CarsList';
import Header from './src/components/Header';

const App = () => {
  return (
    <View>
      <Header />
      <CarList />
    </View>
  );
};

export default App;
