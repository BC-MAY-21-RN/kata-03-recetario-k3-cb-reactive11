import React from "react"
import FoodHeaderComp from "../Components/FoodHeaderComp";
import FoodDescripcion from "../Components/FoodDescripcion";

const FoodScreen = ({navigation}) => {
  return (
    <>
      <FoodHeaderComp navigation={navigation}/>
      <FoodDescripcion />
    </>
  );
};
export default FoodScreen;
