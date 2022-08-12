import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FoodComp = () => {
  return (
    <View>
      <Image style={styles.image} source={{uri: 'https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' }}/>
      <Text >Peperroni Pizza Pockets</Text>
    </View>
  )
}

export default FoodComp


const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    paddingVertical: 10,
    flexWrap: 'wrap',
  }
})