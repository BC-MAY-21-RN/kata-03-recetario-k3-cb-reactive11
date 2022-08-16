import React from 'react'
import {FlatList, View, Text, Image,StyleSheet,ScrollView} from "react-native";
import IngredientComp from './IngredientComp'
import recipes from "../../assets/data/recipes.json"


const FoodDescripcion = () => {

  const ingredients = recipes[0].ingredients

  const item = ({item}) => <IngredientComp name={item.name} quantity={item.quantity}/>


  return (
    <View>
      <Text style={styles.textTitle}>Ingredients</Text>
      <Text style={styles.textTitle}>for 3 servings</Text>
      <FlatList data={ingredients} renderItem={item} />
    </View>
  )
}
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        color: 'white',
        padding:5,
    },
})

export default FoodDescripcion