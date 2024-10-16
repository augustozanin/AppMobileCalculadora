import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Titulo = ({titulo_desejado}) => {
    return (
        <Text style={styles.titulo}>{titulo_desejado}</Text>
    )
}

const styles = StyleSheet.create({
    titulo: {
      color: "black",
      fontSize: 25,
      marginBottom: "10%",
      fontWeight: "Bold",
    },
  });


export default Titulo;

