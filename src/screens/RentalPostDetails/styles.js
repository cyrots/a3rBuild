import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor: '#ff5c5c',
 
    },

    image: {
        width: '80%',
        height: 50,
        resizeMode: 'center',
        borderRadius: 10,  
    },

    operatorName:{
        fontSize: 24,
        fontWeight: 'bold',
    },

    operatorContainer:{
        height: 50,
        width: 60,
        backgroundColor: 'red',

    },
    name:{
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        fontWeight: 'bold',

    },

    descriptionContainer:{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    middleContainer:{
        flex: 1,
        marginHorizontal: 10,
    },

    rightContainer:{
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',


    },

    type:{
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5,

    },

});

export default styles;