
import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const EditUserInfoView = (props)  => {
    const {navigation, userInfo, onChangeText, updateUserInfo} = props;
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContent}>Edit User Information</Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            placeholder="Name"
            onChangeText={(val)=>onChangeText(val, 'name')}
            value={userInfo.name} 
        />
          <Input
            placeholder="Gender"
            onChangeText={(val)=>onChangeText(val, 'gender')}
            value={userInfo.gender} 
        />
        <Input
            placeholder="Email"
            onChangeText={(val)=>onChangeText(val, 'email')}
            value={userInfo.email} 
        />
        <Input
            placeholder="Status"
            onChangeText={(val)=>onChangeText(val, 'status')}
            value={userInfo.status} 
        />
          <Button 
            buttonText={"Update"} 
            onPress = {()=>updateUserInfo()}
          />
        </View>
      </View>
    );
  }


export default EditUserInfoView;