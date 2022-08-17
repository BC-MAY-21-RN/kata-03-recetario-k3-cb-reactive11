import {StyleSheet,ScrollView,Text,View} from "react-native";
import React from "react"
import FoodHeaderComp from "../Components/FoodHeaderComp";
import FoodDescripcion from "../Components/FoodDescripcion";

const FoodScreen = ({navigation}) => {
  //console.log(navigation);
    
  return (
    <>
      <FoodHeaderComp navigation={navigation}/>
      <FoodDescripcion />
    </>
  );
};
const styles = StyleSheet.create({
 
});
export default FoodScreen;
