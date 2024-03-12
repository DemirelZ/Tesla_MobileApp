import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import cars from './cars';
import CarItem from '../CarItem';

const CarList = () => {
  console.log(cars);
  return (
    <View style={{width: '100%'}}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarList;

const styles = StyleSheet.create({});
