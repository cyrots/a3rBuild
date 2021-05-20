import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RentalDetailedPost = (props) => {

    const width = useWindowDimensions().width;
    const navigation = useNavigation();
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
            <View style={[ styles.titleContainer]}>
                <MaterialCommunityIcons name={'car-sports'} size={25}/>
                <Text style={styles.title}>
                    {'  '}{post.carName}
                </Text>
            </View>
            <Image
                style={{
                    width: '80%',
                    height: 170,
                    resizeMode: 'center',
                    borderRadius: 10,  
            }}
                source={getImage()}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <View style={{
                        borderColor: 'pink',
                        width: 120,
                    }}>
                        <Text style={{ fontSize: 26, color: 'orange'}}>
                            <MaterialCommunityIcons name={'star'} size={20}/>
                            <MaterialCommunityIcons name={'star'} size={20}/>
                            <MaterialCommunityIcons name={'star'} size={20}/>
                            <MaterialCommunityIcons name={'star'} size={20}/>
                            <MaterialCommunityIcons name={'star'} size={20}/>
                            
                        </Text>
                    </View>
            </View>
{/*-------------------------------------------------------------*/}  

{/*-------------------------------------------------------------*/}  
                    <View style={{
                        width: wp('90%'),
                        height: 80,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 15,
                        marginRight: 20,
                        paddingTop: 15,

                    }}>
                        <View style={{
                            height: 70,
                            width: 55,
                            flexDirection: 'column',
                            alignItems: 'center',    
                        }}>
                            <Ionicons name={'speedometer-outline'} size={40}/>
                            <Text style={{
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>
                            {post.speed}km/h
                            </Text>
                        </View>
                        <View style={{
                            height: 70,
                            width: 55,
                            flexDirection: 'column',
                            alignItems: 'center',    
                        }}>
                            <MaterialCommunityIcons name={'car-seat'} size={40}/>
                            <Text style={{
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>
                            {post.capacity}
                            </Text>
                        </View>
                        <View style={{
                            height: 70,
                            width: 55,
                            flexDirection: 'column',
                            alignItems: 'center',    
                        }}>
                            <MaterialCommunityIcons name={'car-info'} size={40}/>
                            <Text style={{
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>
                            {post.carMileage}
                            </Text>
                        </View>
                        <View style={{
                            height: 70,
                            width: 55,
                            flexDirection: 'column',
                            alignItems: 'center',    
                        }}>
                            <MaterialCommunityIcons name={'gas-station'} size={40}/>
                            <Text style={{
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>
                            {post.mpg}MPG
                            </Text>
                        </View>
                        <View style={{
                            height: 70,
                            width: 55,
                            flexDirection: 'column',
                            alignItems: 'center',    
                        }}>
                            <MaterialCommunityIcons name={'bag-checked'} size={40}/>
                            <Text style={{
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>
                            {post.bagCapacity}
                            </Text>
                        </View>
                    
                </View>
{/*-------------------------------------------------------------*/}  
                <View style={{
                    height: 135,
                    width: wp('90%'),
                    borderColor: '#5c5c5c',
                    borderWidth: 2,
                    borderRadius:10,
                    marginLeft: 15,
                    marginRight: 20,
                    flexDirection: 'row',
                    marginTop: 20,
                }}>

                    <View style={{
                        height: 134,
                        width: wp('50%'),
                        borderColor: '#5c5c5c',
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            flexDirection: 'column',

                        }}>
                            <View style={{
                                paddingLeft: 5, 
                                flexDirection: 'row', 
                                paddingLeft: 5, 
                                marginTop: 10,
                            }}>
                                <MaterialCommunityIcons name={'human-greeting'} size={15} color={'red'}/>
                                <Text style={{fontWeight: 'bold', fontSize: 15,}}>
                                    {' '}{post.operator}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                paddingLeft: 5,
                                marginTop: 2,
                            }}>
                                <MaterialCommunityIcons name={'phone'} size={15} color={'red'}/>    
                                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
                                {' '}{post.contactNum}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                paddingLeft: 5,
                                marginTop: 2,
                            }}>
                                <Ionicons name={'md-location'} size={15} color={'red'}/>    
                                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
                                {post.location}
                                
                                </Text>
                            </View>
                        </View>
{/*-------------------------------------------------------------*/} 
                        <View style={{
                            flexDirection: 'column',
                            marginTop: 5,
                            paddingLeft: 5,
                            borderTopColor: 'black',
                            borderTopWidth: 2,
                            marginLeft: 5,
                        }}>
                            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                                Payment Option
                            </Text>
                            <View style={{
                                flexDirection: 'row', 
                                justifyContent: 'space-evenly', 
                                marginTop: 2,
                            }}>
                                <Fontisto name={'mastercard'} size={20} color={'red'}/>
                                <Fontisto name={'paypal'} size={20} color={'red'} />
                                <MaterialCommunityIcons name={'bitcoin'} size={20} color={'red'}/>
                                <FontAwesome5 name={'coins'} size={20} color={'red'}/>  
                            </View>
                        </View>

                    </View>
{/*-------------------------------------------------------------*/}  
                    <View style={{
                        height: 134,
                        width: wp('39%'),
                        borderColor: '#5c5c5c',
                        flexDirection: 'column',
                        paddingLeft: 5,
                        marginTop: 10,
                        
                    }}>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                paddingLeft: 5,
                            }}>
                                <MaterialCommunityIcons name={'calendar-clock'} size={20} color={'red'}/>
                                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
                                    {'  '}{post.availability} 
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                paddingLeft: 5,
                                marginTop: 5,
                            }}>
                                <MaterialCommunityIcons name={'steering'} size={20} color={'red'}/>
                                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
                                    {'  '}{post.driver}
                                </Text>

                            </View>
                        </View>

                    </View>

                </View>
        {/*-------------------------------------------------------------*/}   
                <View style={{
                    height: hp('5%'),
                    width: wp('90%'),
                    marginLeft: 15,
                    marginRight: 20,
                    flexDirection: 'row',
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>

                    <View style={{
                        borderStyle: 'dotted',
                        borderRadius: 10,

                    }}>
                        <Text style={{
                            padding: 10,
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            justifyContent: 'space-between',
                            
                        }}>
                            <Ionicons name={'pricetag'} size={15} color={'#42d742'}/> 
                            ₱{post.price} / day
                        </Text>
                    </View>
                        <Pressable style={{
                            backgroundColor: '#000024',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            flexDirection: 'row',
                            width: wp('35%'),
                            height: hp('9%'),
                        
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: 'white',
                            }}>
                                Book Now{'  '}
                            </Text>
                            <MaterialCommunityIcons name={'arrow-right'} size={35} color={'white'}/>
                        </Pressable>

                </View>
                
    </View>
    );
};

export default RentalDetailedPost;
