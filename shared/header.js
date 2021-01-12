import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const Header = props => {
    return(
        <View style={styles.header}>  
        <View style={styles.menu}><Icon name='chevron-back' size={26} color={'white'} onPress={props.onSelect} /></View>
            
        <View>
            <Text style={styles.headerText}>{props.titleText}</Text>
        </View>
        {/* <View><Button title = "Fav" onPress={props.onSelect} /></View> */}
        <View style={styles.favorite}><Icon name='ios-heart' size={26} color={'white'} onPress={null} /></View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        
        backgroundColor: Colors.primaryColor,
        elevation: 10,                   // elevation problem
        width: '100%',
        height: '10%',
        flexDirection: 'row',    
        alignItems: 'center',   
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3, 
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    },
    favorite:{
        padding: 10,
    },
    menu:{
        padding: 10,
    },
});

export default Header;