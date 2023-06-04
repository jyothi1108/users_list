
import * as React from 'react';
import LoginView from './view'


const LoginScreen = ({ navigation })  => {
    const [userInfo, setUserInfo] = React.useState({username:'',password: ''});

    const onChangeText = (text, field) => {
      setUserInfo(prev => ({
          ...prev,
          [field]: text,
      }));
  }

    return (
      <LoginView
        onChangeText = {onChangeText}
        userInfo = {userInfo}
        navigation = {navigation}
      />
    );
  }


export default LoginScreen;