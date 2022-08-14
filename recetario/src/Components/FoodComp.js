import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FoodComp = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:props.uri}}/>
      <Text style={styles.textStyle}>{props.foodName}</Text>
    </View>
  )
}

export default FoodComp


const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    borderRadius: 5,
    paddingVertical: 10,
    flexWrap: 'wrap',
    marginBottom:5,
  },

  container:{
    width:120,
    marginLeft:10,
  },
  textStyle:{
    color:"white",
    fontSize:14,
  },
})