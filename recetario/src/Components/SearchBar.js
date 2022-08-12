import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="white"/>
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
    backgroundColor: "gray",
    borderRadius: "5px",
    marginHorizontal: 45,
    paddingHorizontal:10,
    paddingVertical:5
  },
  searchContainer: {
    flexDirection: 'row'
  },
  searchInput: {
    color: "#fff",
    paddingLeft: 10,
  },

});
export default SearchBar;
