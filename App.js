import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView,
   StatusBar, 
   View 
  } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import Router from './src/navigation/Router';

export default function App() {
  return (
  
      <Router/>
    
    
  );
};


