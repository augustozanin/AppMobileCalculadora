import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Titulo from '../components/titulo';

export default function Calcula({ route }) {
  const {valorBotao, primeiroValor, segundoValor} = route.params;
  const [resultado, setResultado] = useState(null)
  const [calculo , setCalculo] = useState(null)
 
  function realizaOperacao (primeiroValor, segundoValor, valorBotao){
    if (valorBotao == 'SOMA'){
      setResultado(primeiroValor + segundoValor)
      setCalculo(`${primeiroValor} + ${segundoValor}`)
    }
    else if (valorBotao == 'SUBTRAÇÃO'){
      setResultado(primeiroValor - segundoValor)
      setCalculo(`${primeiroValor} - ${segundoValor}`)
    }
    else if (valorBotao == 'MULTIPLICAÇÃO'){
      setResultado(primeiroValor * segundoValor)
      setCalculo(`${primeiroValor} x ${segundoValor}`)
    }
    else if (valorBotao == 'DIVISÃO'){
      setResultado(primeiroValor / segundoValor)
      setCalculo(`${primeiroValor} ÷ ${segundoValor}`)
    }
  }

  // useEffect para chamar a função de cálculo quando a tela carregar
  useEffect(() => {
    realizaOperacao(primeiroValor, segundoValor, valorBotao);
  }, [primeiroValor, segundoValor, valorBotao]); // Executa o efeito sempre que esses valores mudarem

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Titulo titulo_desejado="Trabalho 01 - Cálculos"/>
      </View>
      <View style={styles.resultadoContainer}>
        <Text style={styles.textos}>Valor 1: {primeiroValor}</Text>
        <Text style={styles.textos}>Valor 2: {segundoValor}</Text>
        <Text style={styles.textos}>Operação: {valorBotao}</Text>
        <Text style={styles.textos}>Cálculo: {calculo}</Text>
        <Text style={styles.textos}>Resultado: {resultado}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textos:{
    fontSize: 20,
  },
  tituloContainer: {
    alignItems: 'center', 
  },
  resultadoContainer: {
    alignItems: 'flex-start', 
    paddingHorizontal: 20, 
  }

});