import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
//import {Dropdown } from 'react-native-material-dropdown';


const RentalClientSearchFilter = (props) => {
    const [capacity, setCapacity] = useState(initialState=0);
    const [mileage, setMileage] = useState(initialState=0);
    const navigation = useNavigation();

        

    
    return(
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    paddingVertical: 20,
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: 'lightgrey',
                    }}>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Car Capacity</Text>
                        <Text style={{color: '#a3a3a3'}}>Total passenger.</Text>
                        
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setCapacity(Math.max( 0, capacity - 1))}
                            style={styles.button}
                        > 
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 20, fontSize: 18}}>{capacity}</Text>

                        <Pressable
                            onPress={() => setCapacity(capacity + 1)}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>+</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    paddingVertical: 20,
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: 'lightgrey',
                    }}>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Car Mileage</Text>
                        <Text style={{color: '#a3a3a3'}}>Choose mileage.</Text>
                        
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setMileage(Math.max( 0, mileage - 5000))}
                            style={styles.button}
                        > 
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 20, fontSize: 18}}>{mileage}</Text>

                        <Pressable
                            onPress={() => setMileage(mileage + 5000)}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>+</Text>
                        </Pressable>
                    </View>

                </View>
          {/*      <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    paddingVertical: 20,
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: 'lightgrey',
                    }}>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Car Name</Text>
                        <Text style={{color: '#a3a3a3'}}>Choose your car name.</Text>
                        
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Dropdown
                            label= 'Select car type'
                            data={carType}
                        />

                    </View>

                </View>
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    paddingVertical: 20,
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: 'lightgrey',
                    }}>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Car Type</Text>
                        <Text style={{color: '#a3a3a3'}}>Truck / Van / Bus / etc.</Text>
                        
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Dropdown
                            label= 'Select car type'
                            data={carType}
                        />

                        

                    </View>

                </View> */}

               
            </View>
            <View>
                <Pressable
                    onPress={() => 
                        navigation.navigate('Home',{
                            screen: 'Map',
                            params:{
                                screen: 'SearchResults',
                            },
                        })
                    }
                    style={{
                        marginBottom: 20,
                        backgroundColor: '#ff1f1f',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        marginHorizontal: 20,
                        borderRadius: 10,

                    }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>Search</Text>

                </Pressable>
            </View>

        </View>

    );
};

export default RentalClientSearchFilter;