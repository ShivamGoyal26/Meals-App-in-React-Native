import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {MEALS} from '../data/dummy-data';
import Header from '../shared/header';

const MealDetailScreen = props => {
    const mealId = props.route.params.mealid;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.wrapper}>
        <Header 
            titleText={selectedMeal.title}
            onSelect= {() => {
                props.navigation.pop();
            }} />
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title={selectedMeal.id} onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default MealDetailScreen;