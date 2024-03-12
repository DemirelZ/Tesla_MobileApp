import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import StyledButton from '../StyledButton';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/ModelS.jpeg')}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type={'primary'}
          content={'Custom Order'}
          onPress={() => {}}
        />
        <StyledButton
          type={'secondary'}
          content={'Existing Inventory'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CarItem;
