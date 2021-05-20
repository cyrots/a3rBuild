import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import {Roboto_900Black} from  '@expo-google-fonts/roboto';

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
    },

    titleContainer:{
        height: 30,
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        marginLeft: 100,
        marginRight: 100,

    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },

    specContainer:{
        height: hp('80%'),
        width: wp('100%'),
        justifyContent: 'center',
        backgroundColor: 'blue',


    },

    specText:{
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        
    },

    infoContainer:{
        
    },


});

export default styles;