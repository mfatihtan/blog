import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, PostScreen, } from '../screens';
import themeColor from '../theme/themeColor';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const HomeStackNavigation = () => {
      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen options={{
                              headerStyle: { backgroundColor: themeColor.royalBlue },
                              headerTitleAlign: "center",
                              headerTitle: () => <Image source={require("../../assets/logo.png")} style={{ height: 60, resizeMode: "stretch", width: 240, }} />,
                        }} name='Home' component={HomeScreen} />
                        <Stack.Screen options={{
                              headerShown: false,
                        }} name='Post' component={PostScreen} />
                  </Stack.Navigator>
            </NavigationContainer>
      )
}

export default HomeStackNavigation