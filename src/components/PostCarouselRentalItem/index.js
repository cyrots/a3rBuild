import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const PostCarouselRentalItem = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    const goToRentalDetailedPost = () => {
        navigation.navigate('Rental Detailed Post', {postId: post.id})
    };

    const getImage = () => {
        if (post.carName === 'MITSUBISHI'){
            return require('../../assets/images/mitsubishi.png')
        }
        if (post.carName === 'SEDAN'){
            return require('../../assets/images/sedan.png')
        }
        if (post.carName === 'NISSAN'){
            return require('../../assets/images/nissan.png')
        }
        if (post.carName === 'TOYOTA'){
            return require('../../assets/images/toyota.png')
        }
    };
    
    return(
        <Pressable onPress={goToRentalDetailedPost} style={[styles.container, {width:width-70}]}>
            <View style={styles.innerContainer}>
                <View>
                    <Image
                                style={styles.image}
                                source={getImage()}
                            />
                    </View>

                <View style={{
                    fontWeight: 1,
                }}>
                    <Text style={styles.type}>
                        {post.carName}
                    </Text>
                        
                    <Text style={styles.type}>
                        Capacity:{'  '}<Ionicons name={'people-outline'} size={15}/> 
                        <Text style={{
                            fontWeight: 'bold',
                        }}>
                            {post.capacity} 
                        </Text>
                    </Text>
                    <Text style={styles.type}>
                        Mileage:{'  '} 
                        <Text style={{
                            fontWeight: 'bold'
                            }}>
                            {post.carMileage}k
                        </Text>
                    </Text>
                    <Text style={styles.price}>₱{post.price} / day</Text>
                    <Text style={styles.name} >{post.operator}</Text>
                </View>
            </View>
        </Pressable>
    
    );
};

export default PostCarouselRentalItem;