import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchResults from '../screens/SearchResults';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) =>{
    return(
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'red',
            indicatorStyle: {
                backgroundColor: 'red',
            }
        }}>
            <Tab.Screen name={'list'} component = {SearchResults}/>
            <Tab.Screen name={'map'} component = {SearchResults}/>
        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;