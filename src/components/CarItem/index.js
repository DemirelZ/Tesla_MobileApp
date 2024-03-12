import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import StyledButton from '../StyledButton';

const CarItem = props => {
  const {name, tagline, image, taglineCTA} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.tagLineCTA}>{taglineCTA}</Text>
        </Text>
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
