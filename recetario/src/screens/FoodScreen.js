import React from "react";
import FoodHeaderComp from "../Components/FoodHeaderComp";
import FoodDescripcion from "../Components/FoodDescripcion";
import recipes from "../../assets/data/recipes.json";

const FoodScreen = ({ navigation, route }) => {
  const { foodId, title } = route.params;
  const food = recipes.find((k) => k.id == parseInt(foodId));

  console.log(food);
  return (
    <>
      <FoodHeaderComp
        navigation={navigation}
        image={food.photo}
        name={food.name}
        title={title}
      />
      <FoodDescripcion />
    </>
  );
};
export default FoodScreen;
