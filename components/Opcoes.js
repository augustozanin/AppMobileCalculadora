import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Opcoes = ({setValorBotao, valorBotao}) => {
    function DefinirOperacao(valor){
        if (valor == '+'){
            setValorBotao('SOMA')
        }
        else if (valor == '-'){
            setValorBotao('SUBTRAÇÃO')
        }
        else if (valor == 'x'){
            setValorBotao('MULTIPLICAÇÃO')
        }
        else if (valor == '÷'){
            setValorBotao('DIVISÃO')
        }
    }

  return (
    <View style={styles.view}>
        <View style={styles.centralizaElemnentos}>
            <Text>Informe a operação</Text>
        </View>
      <View style={styles.viewBotoes}>
        <TouchableOpacity style={styles.Botao} onPress={() => DefinirOperacao('+')}>
            <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Botao} onPress={() => DefinirOperacao('-')}>
            <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Botao} onPress={() => DefinirOperacao('x')}>
            <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Botao} onPress={() => DefinirOperacao('÷')}>
            <Text>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centralizaElemnentos}>
        <Text>Operação Escolhida: {valorBotao}</Text>
      </View>
    </View>
  )
}

export default Opcoes

const styles = StyleSheet.create({
    view:{
        marginTop: "3%",
        width: "70%",
    },
    viewBotoes:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5%",
        marginTop: "3%"
    },
    Botao:{
        width : "20%",
        backgroundColor: "#d3d3d3",
        alignItems: "center",
        marginLeft: "1%"
    },
    centralizaElemnentos: {
        alignItems: "center"
    }
})