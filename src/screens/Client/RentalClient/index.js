import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';

const RentalClient = (props) => {
    const [passenger, setPassenger] = useState(initialState=0);
    const [day, setDay] = useState(initialState=0);

    
    return(
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
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>TRAVELLERS</Text>
                    <Text style={{fontColor: 'lightgrey'}}>Total travellers.</Text>
                    
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        onPress={() => setPassenger(Math.max( 0, passenger - 1))}
                        style={styles.button}
                    > 
                        <Text style={{fontSize: 20, color: '#5c5c5c'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 18}}>{passenger}</Text>

                    <Pressable
                        onPress={() => setPassenger(passenger + 1)}
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
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>DAY</Text>
                    <Text style={{fontColor: 'lightgrey'}}>How many days.</Text>
                    
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        onPress={() => setDay(Math.max( 0, day - 1))}
                        style={styles.button}
                    > 
                        <Text style={{fontSize: 20, color: '#5c5c5c'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 18}}>{day}</Text>

                    <Pressable
                        onPress={() => setDay(day + 1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 20, color: '#5c5c5c'}}>+</Text>
                    </Pressable>
                </View>

            </View>


        </View>

    );
};

export default RentalClient;