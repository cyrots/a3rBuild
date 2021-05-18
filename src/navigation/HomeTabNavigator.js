import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapNavigator from '../navigation/MapNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return(
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#00db00',
        }}>
            <Tab.Screen
                name={'Map'}
                component={MapNavigator}
                options={{
                    tabBarIcon: ({color:string}) => (
                        <MaterialCommunityIcons name='google-maps' size={25}/>
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Booking'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color:string}) => (
                        <MaterialCommunityIcons name='calendar-clock' size={25} />
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color:string}) => (
                        <Ionicons name='md-chevron-up-circle' size={25}/>
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Notification'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color:string}) => (
                        <Ionicons name='md-notifications-circle' size={25}/>
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({string}) => (
                        <MaterialIcons name='person-pin' size={25} />
                    )
                        
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;