import React from "react";
import { ImageBackground, View, Text, StyleSheet} from "react-native";
import TopBarHeaderComp from "./TopBarHeaderComp";
import { backgroundColor,whiteColor } from "../constants/colors";

const FoodHeaderComp = ({navigation}) => {
    let image ={uri:'https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg' } 
    let name = 'Peperoni Pizza'
    let type = 'TRENDING'
  return (
    <View style={styles.Background}>
        <ImageBackground source={image}  resizeMode="cover">
       
        <View style={styles.image}>
            <TopBarHeaderComp navigation={navigation}/>
            <Text style={styles.textType}> {type} </Text>
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