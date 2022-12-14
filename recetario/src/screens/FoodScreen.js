import React from "react";
import FoodHeaderComp from "../Components/FoodHeaderComp";
import FoodDescripcion from "../Components/FoodDescripcion";
import recipes from "../../assets/data/recipes.json";

const FoodScreen = ({ navigation, route }) => {
  const { foodId, title } = route.params;
  const food = recipes.find((k) => k.id == parseInt(foodId));
  return (
    <>
      <FoodHeaderComp
        navigation={navigation}
        image={food.photo}
        name={food.name}
        title={title}
        fav={food.favorite}
        views={food.views}
      />
      <FoodDescripcion ingredients={food.ingredients} />
    </>
  );
};
export default FoodScreen;
