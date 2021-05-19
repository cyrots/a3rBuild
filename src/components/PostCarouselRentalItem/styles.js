import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({

    container:{
        height: 130,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 2,
        shadowRadius: 18.00,
        elevation: 24,
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