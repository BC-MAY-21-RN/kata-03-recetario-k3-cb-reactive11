import React from 'react'
import {  View, Text, Image,StyleSheet} from "react-native";


const IngredientComp = ({name, quantity}) => {
  return (

      <View style={styles.container}>
        <Text style={styles.text}>
            {name}
        </Text>
        <Text style={styles.text}>
            {quantity}
        </Text>
      </View>
   
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
          borderBottomColor: 'white',
          borderBottomWidth: .2, 
          marginBottom:12,
          marginHorizontal:15,
    },
    text: {
        fontSize: 18,
        color: 'white',
        padding:15,
    },
})

export default IngredientComp