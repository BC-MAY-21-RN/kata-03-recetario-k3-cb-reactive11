import { View, StyleSheet } from "react-native";
import React, {useState} from "react";
import { AntDesign, MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";

const TopBarHeaderComp = ({navigation, fav}) => {
  const [favorite, setFavorite] = useState(fav)
  let icon = favorite? "heart" : "hearto"
  return (
      <View style={styles.container}>
        <MaterialCommunityIcons  style={styles.lupa} name="window-close" size={30} color="white"
          onPress={() => navigation.goBack()}/>
        <View style={styles.rightContainer}>
            <MaterialIcons name="ios-share" size={26} color="white" style={{paddingRight:15}}/>
            <AntDesign name={icon} size={25} style={{paddingTop:3}} color="white" onPress={() => setFavorite(!favorite)}/>
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
