import React, { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Pressable} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';


const SearchChoice = (props) => {

    const[inputText, setInputText] = useState('');
    const navigation = useNavigation();
    
    return(
        <View>
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/bgChoice.jpg')}
            >
                <View             
                    style={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        height: 400,
                        width: '84%',
                        marginLeft: 30,
                        marginRight: 30,
                        borderRadius: 20,

                    }}>
                <View
                    style={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 159,
                        width: 200,
                        marginLeft: 30,
                        marginRight: 30,

                    }}>
                    <Image
                        style={styles.gif}
                        source={require('../../assets/images/search.gif')}/>
                </View>

                <Pressable
                    onPress={() => navigation.navigate('Location Search')}
                    style={{
                        marginBottom: 20,
                        backgroundColor: '#5cffff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        marginHorizontal: 20,
                        borderRadius: 10,

                    }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>Rent Car</Text>

                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Location Search')}
                    style={{
                        marginBottom: 20,
                        backgroundColor: '#5cffff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        marginHorizontal: 20,
                        borderRadius: 10,

                    }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>Rent Driver</Text>

                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Location Search')}
                    style={{
                        marginBottom: 20,
                        backgroundColor: '#5cffff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        marginHorizontal: 20,
                        borderRadius: 10,

                    }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>Search Service</Text>

                </Pressable>
            </View>

            </ImageBackground>


        </View>


    );
};
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
         
        },
    gif: {
        width: '50%',
        height: '50%',
        resizeMode: 'center',
         
        },
})
export default SearchChoice;