
import React from 'react';
import { View, Text, Pressable} from 'react-native';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const SuggestionRow = ({item}) => (
    <Pressable  onPress={() => navigation.navigate('Rental Client')} style={styles.row}>
        <View style={styles.iconContainer}>
            <EvilIcons name={'location'} size={20}/>
        </View>
        <Text style={styles.locationText}>{item.location}</Text>
    </Pressable>

);

export default SuggestionRow;