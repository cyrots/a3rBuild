import React from 'react';
import { View, FlatList } from 'react-native';
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