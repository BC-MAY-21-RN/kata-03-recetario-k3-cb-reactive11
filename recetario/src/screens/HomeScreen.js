import { View} from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import ScrollComp from '../Components/ScrollComp'
import RecentComp from '../Components/RecentComp'

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <SearchBar />
      <ScrollComp navigation={navigation}/>
      <RecentComp navigation={navigation}/>  
    </View>
  )
}

export default HomeScreen