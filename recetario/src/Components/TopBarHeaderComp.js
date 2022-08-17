import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, Feather, MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import { greyColor } from "../constants/colors";

const TopBarHeaderComp = ({navigation}) => {
  return (
      <View style={styles.container}>
        
        <MaterialCommunityIcons  style={styles.lupa} name="window-close" size={30} color="white"
          onPress={() => navigation.goBack()}/>
        <View style={styles.rightContainer}>
            <MaterialIcons name="ios-share" size={26} color="white" style={{paddingRight:15}}/>
            <FontAwesome name="heart-o" size={25} style={{paddingTop:3}} color="white"/>
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
