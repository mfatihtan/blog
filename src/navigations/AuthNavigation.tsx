import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen, LoginScreen, SignupScreen, } from '../screens';
import themeColor from '../theme/themeColor';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
      return (
            <NavigationContainer>
                  <Stack.Navigator
                        screenOptions={{
                              headerStyle: { backgroundColor: themeColor.royalBlue },
                              headerTitleStyle: { color: themeColor.white, fontSize: 24, },
                              headerTintColor: themeColor.white,
                              headerTitleAlign: "center",
                        }}
                  >
                        <Stack.Screen options={{
                              headerShown: false,
                        }} name='Welcome' component={WelcomeScreen} />
                        <Stack.Screen options={{
                              headerShown: true,
                              title: "Giriş yap"
                        }} name='Login' component={LoginScreen} />
                        <Stack.Screen options={{
                              headerShown: true,
                              title: "Kayıt ol"
                        }} name='Signup' component={SignupScreen} />
                  </Stack.Navigator>
            </NavigationContainer>
      )
}

export default AuthNavigation