import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {backgroundColor} from './src/constants/colors'
import FoodScreen from './src/screens/FoodScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="food" component={FoodScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: backgroundColor,
  },
});
