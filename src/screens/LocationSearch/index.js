import React, { useState } from 'react';
import { View, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
//import SuggestionRow from '../LocationSearch/SuggestionRow';

const LocationSearch = (props) => {

    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>

            <View 
                style={{
                    height: 600,
                }}>
                <GooglePlacesAutocomplete
                        placeholder='Search Location'
                        onPress={(data = {GooglePlaceData}, details = {GooglePlaceDetail} = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                            navigation.navigate('Rental Client')
                        }}
                        fetchDetails
                        styles={{
                            textInput: styles.textInput,
                        }}

                        query={{
                            key: 'AIzaSyD6hl1nh-mG9scBryWnwx0F0kXiSShqXHQ',
                            language: 'en',
                            types: '(cities)',
                        }}
                        //suppressDefaultStyles
                        //renderRow={(item= {GooglePlaceData}) => <SuggestionRow item={item}/>}
                        
                        />
            </View>
        </View>

    );
};

export default LocationSearch;