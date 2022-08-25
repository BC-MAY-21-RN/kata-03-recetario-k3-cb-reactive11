import { Text,StyleSheet } from 'react-native'
import React from 'react'
import { pinkColor } from '../constants/colors';

function Title(props){
    return <Text style={styles.textStyle}> {props.titulo} </Text>
}

const styles = StyleSheet.create({
    textStyle: {
     fontSize: 24,
     marginTop: 20,
     marginBottom:15,
     color: pinkColor,
     fontWeight: '150',
    },
  });
export default Title