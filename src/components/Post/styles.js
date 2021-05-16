import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({

    container:{
        marginTop: 20,
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
    },

    image: {
        width: '80%',
        height: 200,
        resizeMode: 'center',
        borderRadius: 10,  
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