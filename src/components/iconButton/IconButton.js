
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';


const IconButton = (props) => {
  const { iconName, onPress, color} = props
  return (
    <TouchableOpacity onPress = {onPress}>
        <Icon 
            name={iconName} 
            size={24} 
            color={color} />
    </TouchableOpacity>
  );
}


export default IconButton;