import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({

    container:{
        height: 200,
        padding: 1,
    },
    innerContainer:{
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',

    },

    image: {
        height: '100%',
        resizeMode: 'center',  
    },

    descriptionContainer:{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    middleContainer:{
        marginHorizontal: 10,
    },

    rightContainer:{
        width: 100,
        flexDirection: 'row',


    },

    type:{
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5,

    },

    name:{
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        fontWeight: 'bold',

    },
    price:{
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
        textDecorationLine: 'underline',

    },
});

export default styles;