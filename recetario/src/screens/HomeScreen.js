import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import ScrollComp from '../Components/ScrollComp'
import Title from '../Components/Title'



const HomeScreen = () => {
  return (
    <View>
      <SearchBar />
      <ScrollComp />
    </View>
  )
}

export default HomeScreen