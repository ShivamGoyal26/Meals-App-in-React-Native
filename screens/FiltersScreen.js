import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import FilterHeader from '../shared/FilterHeader';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>{props.lable}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor, false: '#C0C0C0' }}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
};

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    return (
        <View style={styles.screen}>
            <FilterHeader titleText='Filters' onSelect={() => {
                props.navigation.toggleDrawer();
            }} />

            <View style={styles.filterScreen}>
                <Text style={styles.title}>Available Filters</Text>



                <FilterSwitch lable="Gluten-Free"
                    state={isGlutenFree}
                    onChange={newValue => setIsGlutenFree(newValue)}
                />

                <FilterSwitch lable="Lactose-Free"
                    state={isLactoseFree}
                    onChange={newValue => setIsLactoseFree(newValue)}
                />

                <FilterSwitch lable="Vegan"
                    state={isVegan}
                    onChange={newValue => setIsVegan(newValue)}
                />

                <FilterSwitch lable="Vegetarian"
                    state={isVegetarian}
                    onChange={newValue => setIsVegetarian(newValue)}
                />

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