import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
    return(
        <View style={styles.header}>
        <View>
            <Text style={styles.headerText}>{props.titleText}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        elevation: 10,                   // elevation problem
        width: '100%',
        height: '10%',
        flexDirection: 'row',    
        alignItems: 'center',   // works in the vertical direction
        justifyContent: 'center'   // works in the horizontal direction
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.primaryColor,
        letterSpacing: 1,
    },
});

export default Header;