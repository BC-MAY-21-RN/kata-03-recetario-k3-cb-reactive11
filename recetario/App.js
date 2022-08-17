import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SearchBar from './src/Components/SearchBar';
import HomeScreen from './src/screens/HomeScreen';
import {backgroundColor} from './src/constants/colors'
import FoodScreen from './src/screens/FoodScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollComp from './src/Components/ScrollComp';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="food" component={FoodScreen} />
        <Stack.Screen name="scroll" component={ScrollComp} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <HomeScreen /> */}
    //   <FoodScreen/>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: backgroundColor,
  },
});
