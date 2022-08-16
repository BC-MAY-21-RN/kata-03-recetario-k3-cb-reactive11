import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { greyColor } from "../constants/colors";

const TopBarHeaderComp = () => {
  return (
      <View style={styles.container}>
        
        <FontAwesome style={styles.lupa} name="close" size={25} color="white"/>
        <View style={styles.rightContainer}>
            <Feather name="share" size={24} color="white" style={{paddingRight:10}}/>
            <FontAwesome name="heart-o" size={20} color="white"/>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop:30,//se visualiza diferente en emulador ios 
    paddingHorizontal:30,
  },
  rightContainer:{
    flexDirection: "row",
  }

});
export default TopBarHeaderComp;
