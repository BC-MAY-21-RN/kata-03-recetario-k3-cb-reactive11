import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import ScrollComp from '../Components/ScrollComp'
import Title from '../Components/Title'
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