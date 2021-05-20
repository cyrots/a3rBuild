import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import DetailedPost from '../../components/DetailedPost'
import places from '../../assets/data/carInformation'

const post = places[0];

const RentalPostDetails = (props) => {
    
    return(
        <View style={{
            backgroundColor: 'white'
        }}>
            <DetailedPost post = {post}/>
        </View>

    );
};

export default RentalPostDetails;