
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';


const Button = (props) => {
  const { buttonText, onPress, buttonStyle, textStyle } = props
  return (
        <TouchableOpacity 
          style={[styles.buttonContainer, buttonStyle]}
          onPress={onPress}
        >
          <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
  );
}


export default Button;