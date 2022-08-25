import { ScrollView, Pressable } from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";
import recipes from "../../assets/data/recipes.json"

const ScrollComp = ({navigation, title, imageSize}) => {
  return (
    <>
      <Title titulo={title} />
      <ScrollView horizontal={true} > 
        {recipes.map((data,key)=>{
            return(
            <Pressable onPress={() => navigation.navigate('food') }>
            <FoodComp 
              link={data.photo} 
              foodName={data.name}
              size={imageSize}
              key={key}/>
            </Pressable>
            )
        })}
      </ScrollView>
    </>
  );
};
export default ScrollComp;
