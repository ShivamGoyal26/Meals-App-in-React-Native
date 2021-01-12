import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterHeader from '../shared/FilterHeader';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <FilterHeader titleText='Filters' onSelect={() => {
                props.navigation.toggleDrawer();
            }} />
            <Text>The Filters Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default FiltersScreen;