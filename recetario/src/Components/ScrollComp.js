import { View, Text, SafeAreaView, TextInput, StyleSheet,ScrollView } from "react-native";
import React from "react";
import FoodComp from "./FoodComp";
import Title from "./Title";

const ScrollComp = () => {
  return (
    <>
    <Title titulo="TRENDING" />
    <ScrollView horizontal={true} > 
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
      <FoodComp />
    </ScrollView>
    </>

  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: "5px",
    marginHorizontal: 45,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
export default ScrollComp;
