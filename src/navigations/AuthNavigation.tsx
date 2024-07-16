import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen, LoginScreen, SignupScreen, } from '../screens';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen options={{
                              headerShown: false,
                        }} name='Welcome' component={WelcomeScreen} />
                        <Stack.Screen options={{
                              headerShown: false,
                        }} name='Login' component={LoginScreen} />
                        <Stack.Screen options={{
                              headerShown: false,
                        }} name='Signup' component={SignupScreen} />
                  </Stack.Navigator>
            </NavigationContainer>
      )
}

export default AuthNavigation