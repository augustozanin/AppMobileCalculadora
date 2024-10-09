import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';  
import Titulo from '../components/titulo';
import Input from '../components/input';
import Opcoes from '../components/Opcoes';

export default function Home({ navigation }) {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [valorBotao, setValorBotao] = useState(null);

  return (
    <View style={styles.container}>
      <Titulo titulo_desejado="Trabalho 01 - Cálculos"/>
      <Input valor={primeiroValor} setValor={(valor) => setPrimeiroValor(parseFloat(valor) || 0)} pergunta="Informe o primeiro valor: " />
      <Input valor={segundoValor} setValor={(valor) => setSegundoValor(parseFloat(valor) || 0)} pergunta="Informe o segundo valor: " />
      <Opcoes setValorBotao={setValorBotao} valorBotao={valorBotao}/>
      <View>
        <TouchableOpacity style={styles.botaoEfetuaCalculo} onPress={() => navigation.navigate('Calcula', {valorBotao, primeiroValor, segundoValor})}>
            <Text>Efetuar Cálculo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoEfetuaCalculo: {
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    marginTop: "10%"
  }
});

