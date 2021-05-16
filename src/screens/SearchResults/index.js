import React from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import carInformation from '../../assets/data/carInformation';
import Post from '../../components/Post';

const SearchResultsScreen = (props) => {
    
    return(
        <View>
            <FlatList
                data={carInformation}
                renderItem={({item}) => <Post post={item}/>}
            />
        </View>

    );
};

export default SearchResultsScreen;