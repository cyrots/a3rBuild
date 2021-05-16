import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import HomeScreen from './src/screens/HomeScreen'
//import Post from './src/components/Post'
//import carInformation from './src/assets/data/carInformation';
import SearchResultsScreen from './src/screens/SearchResults';
//const post1 = carInformation[0];

export default function App() {
  return (
    <View>
      <SearchResultsScreen/>
     {/*<HomeScreen/>*/} 
     {/*<Post post={post1}/>*/} 
    </View>
  );
};


