import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FoodComp = ({link, foodName, size}) => {
  let widthContainer 
  let sizeImage
  let textSize
  //size=='small' ? widthContainer=110 : widthContainer=400
  if(size=='small'){
    widthContainer=120
    sizeImage=110
    textSize=14
  }else{
    widthContainer=170
    sizeImage=160
    textSize=18
  }

  return (
    <View style={[styles.container, {width: widthContainer}]}>
      
      <Image style={[styles.image, {width: sizeImage, height:sizeImage}]} source={{uri: link}}/>
      <Text style={[styles.textStyle, {fontSize: textSize}]}>{foodName}</Text>
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