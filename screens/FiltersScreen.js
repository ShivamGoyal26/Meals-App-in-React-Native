import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterHeader from '../shared/FilterHeader';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <FilterHeader titleText='Filters' onSelect={() => {
                props.navigation.toggleDrawer();
            }} />
            <View style={styles.container}>
            <Text>The Filters Screen</Text>
            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default FiltersScreen;