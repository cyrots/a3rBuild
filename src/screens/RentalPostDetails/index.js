import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import RentalDetailedPost from '../../components/RentalDetailedPost'
import places from '../../assets/data/carInformation';
import {useRoute} from '@react-navigation/native';


const post = places[0];

const RentalPostDetails = (props) => {
    const route = useRoute();

    const post = places.find(place=> place.id === route.params.postId);
    
    return(
        <View style={{
            backgroundColor: 'white'
        }}>
            <RentalDetailedPost post = {post}/>
        </View>

    );
};

export default RentalPostDetails;