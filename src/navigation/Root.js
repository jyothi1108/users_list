import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/index';
import HomeScreen from '../screens/home';
import EditUserInfoScreen from '../screens/editUserInfo';

const Stack = createStackNavigator();

function Rootnavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="EditUserInfo" component={EditUserInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rootnavigator;