import React from 'react';
import {Platform} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const MealsNavigator = () => <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Meals App" component={CategoriesScreen} 
         options={{ 
             title: 'Meals Categories', 
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        
         }} />
        <Stack.Screen name="Category" component={CategoryMealScreen} 
        options={
            { title: 'Category' }
            // ({route}) => ({title: route.params.name})
            } 

        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen}  options={{ title: 'Meal Detail' }}/>
    </Stack.Navigator>
</NavigationContainer>



export default MealsNavigator;