
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

const LoginView = (props) => {
  const { onChangeText, userInfo, navigation } = props
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContent}>Log In</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="Username"
          onChangeText={(val)=>onChangeText(val, 'username')}
          value={userInfo.username} />
        <Input
          placeholder="Password"
          onChangeText={(val)=>onChangeText(val, 'password')}
          value={userInfo.password} />
        <Button 
          buttonText={"Submit"} 
          onPress = {()=>navigation.replace('Home')}
        />
      </View>
    </View>
  );
}


export default LoginView;