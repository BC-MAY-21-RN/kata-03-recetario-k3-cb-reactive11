import {StyleSheet,ScrollView } from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";
import recipes from "../../assets/data/recipes.json"

const ScrollComp = () => {
    
  return (
    <>
      <Title titulo="RECENT" />
      <ScrollView horizontal={true} > 
        {recipes.map((data,key)=>{
            return(
            <FoodComp 
            link={data.photo} 
            foodName={data.name}
            size="big"
            key={key}/>
            )
        })}
        
      </ScrollView>
    </>

  );
};
const styles = StyleSheet.create({
 
});
export default ScrollComp;
