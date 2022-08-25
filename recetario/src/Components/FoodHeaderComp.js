import React from "react";
import { ImageBackground, View, Text, StyleSheet} from "react-native";
import TopBarHeaderComp from "./TopBarHeaderComp";
import { backgroundColor,whiteColor } from "../constants/colors";

const FoodHeaderComp = ({navigation, image, name, title, fav}) => {
  return (
    <View style={styles.Background}>
        <ImageBackground source={{uri: image}}  resizeMode="cover">
        <View style={styles.image}>
            <TopBarHeaderComp navigation={navigation} fav={fav}/>
            <Text style={styles.textType}>{title}</Text>
            <Text style={styles.textName}>{name}</Text>
        </View>
        </ImageBackground> 
    </View>
  )
}
const styles = StyleSheet.create({
    textType: {
        fontSize: 24,
        color: whiteColor,
        paddingTop:180,
        paddingLeft:8,
    },
    textName: {
        fontSize: 35,
        color: whiteColor,
        paddingLeft:15,
        paddingBottom:30,
    },
    image:{
        backgroundColor:"#000000c0"
    },
    Background:{
        backgroundColor:backgroundColor,
        paddingBottom:15,
    },
    textTitle: {
        fontSize: 22,
        color: "white",
        paddingBottom: 5,
      },
      container: {
        paddingLeft: 15,
        marginTop:10,
      },
});
export default FoodHeaderComp