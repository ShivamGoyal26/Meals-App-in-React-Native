import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {MEALS} from '../data/dummy-data';

const MealDetailScreen = props => {
    const mealId = props.route.params.mealid;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title={selectedMeal.id} onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealDetailScreen;