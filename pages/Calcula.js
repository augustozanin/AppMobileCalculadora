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
      <Titulo titulo_desejado="Trabalho 01 - Cálculos"/>
      <Text>Valor 1: {primeiroValor}</Text>
      <Text>Valor 2: {segundoValor}</Text>
      <Text>Operação: {valorBotao}</Text>
      <Text>Cálculo: {calculo}</Text>
      <Text>Resultado: {resultado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});