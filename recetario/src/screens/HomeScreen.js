import { View} from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import ScrollComp from '../Components/ScrollComp'
import RecentComp from '../Components/RecentComp'

const HomeScreen = () => {
  return (
    <View>
      <SearchBar />
      <ScrollComp />
      <RecentComp />
    </View>
  )
}

export default HomeScreen