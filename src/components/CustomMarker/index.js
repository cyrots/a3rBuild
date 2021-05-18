import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = (props) => {
    const {coordinate, price, onPress, isSelected} = props;
    

    return(
        <Marker coordinate={coordinate} onPress={onPress}>
            <View style={{
                backgroundColor: isSelected ? '#1fff1f':'#f0f0f0',
                padding: 5,
                borderRadius: 10,
                borderColor: 'grey',
                borderWidth: 1,
            }}>
                <Text style={{ fontWeight: 'bold', color: isSelected ? 'black' : '#2e2e2e'}}>₱{price}</Text>
            </View>
        </Marker>

    );
};

export default CustomMarker;