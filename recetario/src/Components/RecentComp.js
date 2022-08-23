import {StyleSheet,ScrollView, Pressable} from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";
import recipes from "../../assets/data/recipes.json"

const RecentComp = ({navigation}) => {
    
  return (
    <>
      <Title titulo="RECENT" />
      <ScrollView horizontal={true} > 
        {recipes.map((data,key)=>{
            return(
            <Pressable onPress={() => navigation.navigate('food') }>
              <FoodComp 
              link={data.photo} 
              foodName={data.name}
              size="big"
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
export default RecentComp;
