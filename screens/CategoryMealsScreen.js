import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import {CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import Header from '../shared/header';


const CategoryMealScreen = (props) => {
    const catid = props.route.params.catgoryId;
    const CustomHeaderText = props.route.params.title;

    const selectedCategory = CATEGORIES.find(cat => cat.id ===catid.catgoryId);

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

    // const catid = props.route.params.catgoryId;

    // const selectedCategory = CATEGORIES.find(cat => cat.id ===catid.catgoryId);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catid) >= 0
    );


    return (
        <View style = {styles.wrapper}>
        <Header titleText={CustomHeaderText}/>
        <View style={styles.screen}>
        <FlatList data={displayedMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{ width: '100%' }}
        />
    </View></View>
        
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

export default CategoryMealScreen;