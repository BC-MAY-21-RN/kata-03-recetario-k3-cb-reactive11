import React from 'react'
import {FlatList, View, Text, Image,StyleSheet,ScrollView} from "react-native";
import IngredientComp from './IngredientComp'
import recipes from "../../assets/data/recipes.json"


const FoodDescripcion = () => {

  const ingredients = recipes[0].ingredients

  const item = ({item}) => <IngredientComp name={item.name} quantity={item.quantity}/>


  return (
    <View style={{paddingBottom:40}}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Ingredients</Text>
        <Text style={styles.textTitle}>for 3 servings</Text>
      </View>
      <FlatList data={ingredients} renderItem={item} />
    </View>
  )
}
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 22,
        color: 'white',
        paddingBottom:5,
    },
    container:{
      paddingLeft:15,
      marginBottom:10,
    },
})

export default FoodDescripcion