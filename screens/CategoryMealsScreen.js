import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoryMealScreen = (props) => {

    const renderMealItem = itemData => {
        return <MealItem title={
            itemData.item.title}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetail', {
                        mealid: itemData.item.id,
                    });
            }}
            duration={itemData.item.duration}
            affordability =  {itemData.item.affordability} 
            complexity = {itemData.item.complexity}
            image = {itemData.item.imageUrl}
        />;
    };

    const catid = props.route.params.catgoryId;

    // const selectedCategory = CATEGORIES.find(cat => cat.id ===catid.catgoryId);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catid) >= 0
    );


    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catid = navigationData.route.params;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catid.catgoryId);
    return {
        headerTitle: selectedCategory.title,
    };

};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealScreen;