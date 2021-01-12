import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import FavoriteHeader from '../shared/FavoritesHeader';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const FavoritesScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem title={
            itemData.item.title}
            onSelectMeal={() => {
                props.navigation.navigate('FavoriteStackMealDetail', {
                    mealid: itemData.item.id,
                });
            }}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            image={itemData.item.imageUrl}
        />;
    };
    const favMeals = MEALS.filter(
        meal => meal.id === 'm1' || meal.id === 'm2'
    );
    return (
        <View style={styles.screen}>
        <FavoriteHeader titleText="Your Favorites"/>
            
            <View style={styles.nestedScreen}>
                <FlatList data={favMeals}
                    keyExtractor={(item, index) => item.id}
                    renderItem={renderMealItem}
                    style={{ width: '100%' }}
                />
            </View>
        

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    nestedScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default FavoritesScreen;