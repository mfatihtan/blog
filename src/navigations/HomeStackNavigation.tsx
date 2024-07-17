import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, } from '../screens';
import themeColor from '../theme/themeColor';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const HomeStackNavigation = () => {
      return (
            <NavigationContainer>
                  <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: themeColor.royalBlue },
                        headerTitleAlign: "center",
                        headerTitle: () => <Image source={require("../../assets/logo.png")} style={{ height: 60, resizeMode: "stretch", width: 240, }} />,
                  }}>
                        <Stack.Screen name='Home' component={HomeScreen} />
                  </Stack.Navigator>
            </NavigationContainer>
      )
}

export default HomeStackNavigation