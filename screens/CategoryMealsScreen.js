import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {useSelector} from 'react-redux'
import MealItem from '../components/MealItem';
import CategoryItemHeader from '../shared/CategoryItemHeader';


const CategoryMealScreen = (props) => {
    const catid = props.route.params.catgoryId;
    const CustomHeaderText = props.route.params.title;


    const renderMealItem = itemData => {
        return <MealItem title={
            itemData.item.title}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetail', {
                    mealid: itemData.item.id,
                });
            }}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            image={itemData.item.imageUrl}
        />;
    };

    const avaliableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = avaliableMeals.filter(
        meal => meal.categoryIds.indexOf(catid) >= 0
    );


    return (
        <View style={styles.wrapper}>
            <CategoryItemHeader 
            titleText={CustomHeaderText}
            onSelect= {() => {
                props.navigation.pop();
            }} />
            <View style={styles.screen}>
                <FlatList data={displayedMeals}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default CategoryMealScreen;