import {StyleSheet,ScrollView } from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";
import recipes from "../../assets/data/recipes.json"

const ScrollComp = () => {
    {recipes.map((data)=>{
        console.log(data.name)
    })}
  return (
    <>
      <Title titulo="RECENT" />
      <ScrollView horizontal={true} > 
        <FoodComp 
        link='https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' 
        foodName='Peperoni Pizza Pockets'
        size="big"/>
        <FoodComp 
        link='https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' 
        foodName='Peperoni Pizza Pockets'
        size="big"/>
        
      </ScrollView>
    </>

  );
};
const styles = StyleSheet.create({
 
});
export default ScrollComp;
