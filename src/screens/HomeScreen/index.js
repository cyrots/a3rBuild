import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';



const HomeScreen = (props) => {
    return(
        <View>
            <Pressable
                style={styles.buttonSearch}
                onPress={() => console.warn('Search Button Clicked!')}>
                    <Text style={styles.searchButtonText}>Where are you going?{'   '}</Text>
                    <Fontisto name={'search'} size={25} color={'#fff'}/>
            </Pressable>

            <ImageBackground
                source={require('../../assets/images/bg.jpg')}
                style={styles.image}
            >
                <Text style={styles.title}>A3 RIDE.</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Button Clicked!')}>
                        <Text style={styles.buttonText}>Explore Nearby</Text>
                    </Pressable>
            </ImageBackground>

        </View>
    )
};

export default HomeScreen;