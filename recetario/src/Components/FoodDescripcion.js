import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import IngredientComp from "./IngredientComp";
import recipes from "../../assets/data/recipes.json";
import { backgroundColor } from "../constants/colors";

const FoodDescripcion = ({ingredients}) => {
  //const ingredients = recipes[0].ingredients;
  const renderItem = ({ item }) => (
    <IngredientComp name={item.name} quantity={item.quantity} />
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Ingredients</Text>
        <Text style={styles.textTitle}>for 3 servings</Text>
      </View>
      <FlatList
        data={ingredients}
        renderItem={renderItem}
        style={styles.listBackground}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
const styles = StyleSheet.create({
  textTitle: {
    fontSize: 22,
    color: "white",
    paddingBottom: 5,
  },
  container: {
    paddingLeft: 15,
    paddingBottom: 10,
    backgroundColor: backgroundColor,
  },
  listBackground: {
    backgroundColor: backgroundColor,
  },
});

export default FoodDescripcion;
