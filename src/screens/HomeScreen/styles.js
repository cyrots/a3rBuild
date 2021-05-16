import {StyleSheet, Dimensions} from 'react-native';



const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
     
    },
    title:{
        fontSize: 80,
        fontWeight: 'bold',
        color: 'red',
        width: '70%',
        marginLeft: 25,

    },
    button:{
        backgroundColor: '#7fe5f0',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',

        
    },
    buttonSearch:{
        backgroundColor: '#7fe5f0',
        width: Dimensions.get('screen').width - 20,
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 100,
        elevation: 100,

        
        
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',

    },
    searchButtonText:{
        fontSize: 16,
        fontWeight: 'bold',

    },

});

export default styles;