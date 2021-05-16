import React, { useState } from 'react';
import { View, TextInput, FlatList, Text} from 'react-native';
import styles from './styles';
import searchResults from '../../assets/data/searchLocation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SearchResultsScreen = (props) => {

    const[inputText, setInputText] = useState(initialState='');
 
    
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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <EvilIcons name={'location'} size={30}/>
                        </View>
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
            
                )}
            />

        </View>

    );
};

export default SearchResultsScreen;