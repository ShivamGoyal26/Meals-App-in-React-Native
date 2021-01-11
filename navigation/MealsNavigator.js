import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();


const MealsNavigator = () =>
    <Stack.Navigator>
        <Stack.Screen name="Meals App" component={CategoriesScreen} options={{headerShown: false}} />
        <Stack.Screen name="Category" component={CategoryMealScreen} options={{headerShown: false}} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{headerShown: false}} />
    </Stack.Navigator>

const MealsFavTabNavigator = createBottomTabNavigator();

const MyTabs = () =>
    <NavigationContainer>
        <MealsFavTabNavigator.Navigator>
            <MealsFavTabNavigator.Screen name="Home" component={MealsNavigator} />
            <MealsFavTabNavigator.Screen name="Favorites" component={FavoritesScreen} />
        </MealsFavTabNavigator.Navigator>
    </NavigationContainer>



export default MyTabs;