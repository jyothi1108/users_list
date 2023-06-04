
import * as React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = (props) => {
  const { placeholder, onChangeText, value } = props
  return (
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChangeText}
          value={value} />
  );
}


export default Input;