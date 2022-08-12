import { Text,StyleSheet } from 'react-native'
import React from 'react'


function Title(props){
    return <Text style={styles.textStyle}> {props.titulo} </Text>
}


const styles = StyleSheet.create({
    textStyle: {
     fontSize: 24,
     marginTop: 20,
     marginBottom:5,
     color: '#CC0066',
     fontWeight: '150',
    },
  });
export default Title