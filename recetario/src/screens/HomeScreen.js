import { View,StyleSheet} from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import HorizontalScrollComp from '../Components/HorizontalScrollComp'
import { backgroundColor } from '../constants/colors'

const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}> 
      <SearchBar />
      <HorizontalScrollComp navigation={navigation} title="TRENDING" imageSize="small"/>
      <HorizontalScrollComp navigation={navigation} title="RECENT" imageSize="BIG"/>
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