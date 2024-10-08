import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './components/titulo';
import Input from './components/input';
import Opcoes from './components/Opcoes';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Titulo titulo_desejado="Trabalho 01 - Cálculos"/>
      <Input pergunta="Informe o primeiro valor: " />
      <Input pergunta="Informe o segundo valor: " />
      <Opcoes />
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
});

