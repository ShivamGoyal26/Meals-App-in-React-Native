import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={styles.header}>

            <View>
                <Text style={styles.headerText}>{props.titleText}</Text>
            </View>

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
        justifyContent: 'center',
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

});

export default Header;