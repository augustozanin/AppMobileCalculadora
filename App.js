import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Calcula from './pages/Calcula';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name = 'Home' component={Home}/>
      <Stack.Screen name = 'Calcula' component={Calcula}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


