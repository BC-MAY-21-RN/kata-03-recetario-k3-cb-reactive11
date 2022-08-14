import { View, Text, SafeAreaView, TextInput, StyleSheet,ScrollView } from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";

const ScrollComp = () => {
  return (
    <>
      <Title titulo="TRENDING" />
      <ScrollView horizontal={true} > 
        <FoodComp uri='https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' foodName='Peperoni Pizza Pockets'/>
        <FoodComp uri='https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' foodName='Peperoni Pizza Pockets'/>
        <FoodComp uri='https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' foodName='Peperoni Pizza Pockets'/>
        <FoodComp uri='https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' foodName='Peperoni Pizza Pockets'/>
        <FoodComp uri='https://png.pngtree.com/png-clipart/20190517/original/pngtree-homemade-pizza-png-image_4235039.png' foodName='Peperoni Pizza Pockets'/>

      </ScrollView>
    </>

  );
};
const styles = StyleSheet.create({
 
});
export default ScrollComp;
