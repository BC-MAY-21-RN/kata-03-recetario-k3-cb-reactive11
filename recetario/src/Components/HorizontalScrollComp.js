import { Pressable, FlatList } from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";
import recipes from "../../assets/data/recipes.json";

const ScrollComp = ({ navigation, title, imageSize }) => {
  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('food', {foodId: item.id, title:title})}>
      <FoodComp link={item.photo} foodName={item.name} size={imageSize} />
    </Pressable>
  );
  return (
    <>
      <Title titulo={title} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
export default ScrollComp;
