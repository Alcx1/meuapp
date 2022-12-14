import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
import {initializeApp} from 'firebase/app';
import React, {useState, useEffect} from 'react';


console.disableYellowBox=true;



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#Ffa500" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
    
  );
  
}
