import React from "react";
import { ImageBackground, View, Text, Image,StyleSheet} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FoodDescripcion from "./FoodDescripcion"; 
import TopBarHeaderComp from "./TopBarHeaderComp";
import { backgroundColor } from "../constants/colors";

const FoodHeaderComp = () => {
    let image ={uri:'https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg' } 
    let name = 'Peperoni Pizza'
    let type = 'Trending'
  return (
    <View style={styles.Background}>
        <ImageBackground source={image}  resizeMode="cover">
       
        <View style={styles.image}>
            <TopBarHeaderComp/>
            <Text style={styles.textType}> {type} </Text>
            <Text style={styles.textName}>{name}</Text>
        </View>
        

        </ImageBackground>  
        
    </View>
  )
}
const styles = StyleSheet.create({
    textType: {
        fontSize: 30,
        color: 'white',
        paddingTop:180,
    },
    textName: {
        fontSize: 35,
        color: 'white',
    },
    image:{
        backgroundColor:"#000000c0"
    },
    Background:{
        backgroundColor:backgroundColor,
    },
});
export default FoodHeaderComp