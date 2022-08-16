import React from 'react'
import {  View, Text, Image,StyleSheet} from "react-native";


const IngredientComp = ({name, quantity}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>
            {name}
        </Text>
        <Text style={styles.text}>
            {quantity}
        </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderBottomColor: 'white',
        borderBottomWidth: 1, 
        margin:10,
    },
    text: {
        fontSize: 20,
        color: 'white',
        padding:10,
    },
})

export default IngredientComp