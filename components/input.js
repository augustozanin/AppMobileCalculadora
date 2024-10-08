import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({pergunta}) => {
  return (
    <View style={styles.view}>
       <Text style={styles.text}>{pergunta}</Text>
      <TextInput keyboardType='numeric' style={styles.input}></TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        backgroundColor: "#d3d3d3",
        borderRadius: 10,
        
    },
    text:{
        textAlign: "left"
    },
    view:{
        width: "70%",
        marginTop: "3%",
    }
})