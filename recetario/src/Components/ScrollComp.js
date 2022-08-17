import { View, Text, SafeAreaView, TextInput, StyleSheet,ScrollView, Pressable } from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";
import recipes from "../../assets/data/recipes.json"

const ScrollComp = ({navigation}) => {
  console.log(navigation);
  
  return (
    <>
      <Title titulo="TRENDING" />
      <ScrollView horizontal={true} > 
        {recipes.map((data,key)=>{
            return(
              <Pressable onPress={() => navigation.navigate('food') }>

            <FoodComp 
            link={data.photo} 
            foodName={data.name}
            size="small"
            key={key}/>
            </Pressable>
            )
        })}
        
      </ScrollView>
    </>

  );
};
const styles = StyleSheet.create({

});
export default ScrollComp;
