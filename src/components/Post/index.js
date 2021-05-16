import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Post = (props) => {

    const post = props.post;

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
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={getImage()}
        />

            <View style={styles.descriptionContainer}>
                <View style={styles.middleContainer}>
                    <Text style={styles.type}>{post.carName}{'  '}
                        <Ionicons name={'people-outline'} size={25}/>
                        <Text> {post.capacity}{'  '}M{post.carMileage}k</Text>
                    </Text>
                    <Text style={styles.name}> {post.operator} </Text>
                </View>
                <View style={styles.rightContainer}>
                    <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
                    <Text style={styles.price}>₱{post.price}/day</Text>
                </View>     
            </View>


        

        


        </View>
    );
};

export default Post;