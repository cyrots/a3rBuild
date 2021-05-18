import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import searchResults from '../../assets/data/searchLocation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';


const LocationSearch = (props) => {

    const[inputText, setInputText] = useState('');
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={'Location Search'}
                value={inputText}
                onChangeText={setInputText}
                />
            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                    <Pressable  onPress={() => navigation.navigate('Rental Client')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <EvilIcons name={'location'} size={30}/>
                        </View>
                        <Text style={styles.locationText}>{item.location}</Text>
                    </Pressable>
            
                )}
            />

        </View>

    );
};

export default LocationSearch;