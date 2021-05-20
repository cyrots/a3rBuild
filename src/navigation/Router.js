import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LocationSearch from '../screens/LocationSearch';
import HomeTabNavigator from '../navigation/HomeTabNavigator';
import RentalClientSearchFilter from '../screens/RentalClientSearchFilter';
import SearchChoice from '../screens/SearchChoice';
import RentalPostDetails from '../screens/RentalPostDetails';
import RentalDetailedPost from '../components/RentalDetailedPost';

const Stack = createStackNavigator();

const Router = (props) => {

    return (

        
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen
                    name={'Home'}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}

                />

                <Stack.Screen
                    name={'Search Choice'}
                    component={SearchChoice}
                    options={{
                        title: 'What are you looking?'
                    }}

                />

                <Stack.Screen
                    name={'Location Search'}
                    component={LocationSearch}
                    options={{
                        title: 'Search your desired location.'
                    }}

                />

                <Stack.Screen
                    name={'Rental Client'}
                    component={RentalClientSearchFilter}
                    options={{
                        title: 'What car are you looking?'
                    }}

                />

                <Stack.Screen
                    name={'Rental Detailed Post'}
                    component={RentalPostDetails}
                    options={{
                        title: 'Rental Car'
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;