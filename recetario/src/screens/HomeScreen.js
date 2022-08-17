import { View,StyleSheet} from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import ScrollComp from '../Components/ScrollComp'
import RecentComp from '../Components/RecentComp'
import { backgroundColor } from '../constants/colors'

const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}> 
      <SearchBar />
      <ScrollComp navigation={navigation}/>
      <RecentComp navigation={navigation}/>  
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: backgroundColor,
    paddingBottom:200,
  },
});


export default HomeScreen