
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Meals App" component={CategoriesScreen}  options={{ title: 'Meals App' }} />
        <Stack.Screen name="Category" component={CategoryMealScreen} options={{ title: 'Category' }} />
        <Stack.Screen name="Meal Detail" component={MealDetailScreen}  options={{ title: 'Meal Detail' }}/>
    </Stack.Navigator>
</NavigationContainer>



export default MealsNavigator;