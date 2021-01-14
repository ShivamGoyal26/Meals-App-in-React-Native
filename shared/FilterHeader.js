import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const FilterHeader = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={styles.menu}><Icon name='md-menu' size={26} color={'white'} /></View>
            </TouchableOpacity>

            <View style={styles.alginit}><Text style={styles.headerText}>{props.titleText}</Text></View>

            <TouchableOpacity onPress={props.onSave}>
                <View style={styles.menu}><Icon name='ios-save' size={26} color={'white'} /></View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        elevation: 10,
        width: '100%',
        height: '8%',
        flexDirection: 'row',
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

    menu: {
        padding: 10,
    },
    alginit: {

        justifyContent: 'center',
    },

});

export default FilterHeader;