import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SearchBar from './src/Components/SearchBar';
import HomeScreen from './src/screens/HomeScreen';
import {backgroundColor} from './src/constants/colors'
import FoodScreen from './src/screens/FoodScreen'



export default function App() {
  return (


    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <FoodScreen />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: backgroundColor,
  },
});
