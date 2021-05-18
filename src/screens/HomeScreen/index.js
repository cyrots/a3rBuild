import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';



const HomeScreen = (props) => {
    const navigation = useNavigation();
    return(
        <View>
            <Pressable
                style={styles.buttonSearch}
                onPress={() => navigation.navigate('Search Choice')}>
                    <Text style={styles.searchButtonText}>Search{'   '}</Text>
                    <Fontisto name={'search'} size={25} color={'#fff'}/>
            </Pressable>

            <ImageBackground
                source={require('../../assets/images/bg.jpg')}
                style={styles.image}
            >
                <Text style={styles.title}>A3 RIDE.</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate()}>
                        <Text style={styles.buttonText}>Explore Nearby</Text>
                    </Pressable>
            </ImageBackground>

        </View>
    )
};

export default HomeScreen;