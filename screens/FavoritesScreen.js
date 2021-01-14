import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import FavoritesHeader from '../shared/FavoritesHeader';
import MealItem from '../components/MealItem';
import {useSelector} from 'react-redux';

const FavoritesScreen = props => {
    const avaliableMeals = useSelector(state => state.meals.favoriteMeals);

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
    return (
        <View style={styles.screen}>
        <FavoritesHeader titleText="Your Favorites" onSelect={() => {
                props.navigation.toggleDrawer();
            }}/>
            
            <View style={styles.nestedScreen}>
                <FlatList data={avaliableMeals}
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