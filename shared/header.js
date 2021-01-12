import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={styles.header}>

            <View style={styles.backButton}>
                <TouchableOpacity onPress={props.onSelect}>
                    <Icon name='chevron-back' size={26} color={'white'} />
                </TouchableOpacity>
            </View>

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{props.titleText}</Text>
            </View>
            <View style={styles.favorite}><Icon name='ios-heart' size={26} color={'white'} onPress={null} /></View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {

        backgroundColor: Colors.primaryColor,
        elevation: 10,
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        letterSpacing: 1,
    },
    headerContainer: {
        width: '80%',
    },
    favorite: {
        width: '10%',

    },
    backButton: {
        width: '10%',
        padding: 10,
    },

});

export default Header;