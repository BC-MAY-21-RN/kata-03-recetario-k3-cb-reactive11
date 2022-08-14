import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { greyColor } from "../constants/colors";

const SearchBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <FontAwesome style={styles.lupa} name="search" size={15} color="white"/>
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#fff"
            placeholder="What do you want eat"
          />
        </View>
        <FontAwesome name="microphone" size={20} color="white"/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: greyColor,
    borderRadius: 10,
    marginHorizontal: 45,
    paddingHorizontal:10,
    paddingVertical:5,
    marginTop:55,//se visualiza diferente en emulador ios 
  },
  searchContainer: {
    flexDirection: 'row'
  },
  searchInput: {
    color: "#fff",
    paddingLeft: 10,
  },
  lupa:{
    paddingTop: 5,
  }

});
export default SearchBar;
