import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';

const StyledButton = props => {
  const {content, type, onPress} = props;

  const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
  const textColor = type === 'primary' ? '#ffffff' : '#171a20';

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={onPress}>
        <Text style={[styles.content, {color: textColor}]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
