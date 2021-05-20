import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapNavigator from '../navigation/MapNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RentalPostDetails from '../screens/RentalPostDetails'

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
                        <MaterialCommunityIcons name='map-search' size={30}/>
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Booking'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color:string}) => (
                        <MaterialCommunityIcons name='calendar-multiselect' size={30} />
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color:string}) => (
                        <MaterialIcons name='roofing' size={55} color={'black'} />
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Notification'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color:string}) => (
                        <Ionicons name='md-notifications-circle' size={30}/>
                    )
                        
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({string}) => (
                        <MaterialIcons name='person-pin' size={30} />
                    )
                        
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;