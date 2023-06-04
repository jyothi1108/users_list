
import React from 'react';
import {ActivityIndicator,View} from 'react-native';
import ColorConstants from '../../utility/ColorConstants';


const Loader = () => {
  return (
    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={ColorConstants.BLUE} />
    </View>
  );
}

export default Loader;