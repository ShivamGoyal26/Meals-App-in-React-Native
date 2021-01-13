import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import FilterHeader from '../shared/FilterHeader';
import Colors from '../constants/Colors';



const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <FilterHeader titleText='Filters' onSelect={() => {
                props.navigation.toggleDrawer();
            }} />

            <View style={styles.filterScreen}>
                <Text style={styles.title}>Available Filters</Text>

                <View style={styles.filterContainer}>
                    <Text style={styles.filterTitle}>Gluten-Free</Text>
                    <Switch />
                </View>

                <View style={styles.filterContainer}>
                    <Text style={styles.filterTitle}>Gluten-Free</Text>
                    <Switch />
                </View>

                <View style={styles.filterContainer}>
                    <Text style={styles.filterTitle}>Gluten-Free</Text>
                    <Switch />
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    filterScreen: {
        padding: 10,
    },
    title: {
        color: Colors.primaryColor,
        fontSize: 20,
        textAlign: 'center',
    },
    filterContainer: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filterTitle: {
        fontSize: 16,
    },
});

export default FiltersScreen;