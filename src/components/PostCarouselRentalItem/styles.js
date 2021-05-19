import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({

    container:{
        height: 120,
        padding: 5,
        position: 'absolute',
    },
    innerContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',

    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'center', 
    },

    type:{
        fontSize: 18,
        fontWeight: 'bold',

    },

    name:{
        fontSize: 18,
        alignItems: 'center',
        fontWeight: 'bold',

    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        
    },
});

export default styles;