import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();


const MealsNavigator = () =>
    <Stack.Navigator>
        <Stack.Screen name="Meals App" component={CategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={CategoryMealScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () =>

    <NavigationContainer>
        <Tab.Navigator
            activeColor={Colors.primaryColor}
            inactiveColor={Colors.accentColor}
            barStyle={{ backgroundColor: 'white' }}
            // barStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen name="Home"
                component={MealsNavigator}
                options={{
                    tabBarColor: Colors.primaryColor,
                    tabBarLabel: 'Meals',
                    tabBarIcon: ({ color }) => (
                        <Icon name="fast-food" color={color} size={26} />
                    ),

                }}
            />
            <Tab.Screen name="Favotites"
                component={FavoritesScreen}
                options={{
                    tabBarColor: Colors.accentColor,
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-heart" color={color} size={26} />
                    ),

                }}
            />
        </Tab.Navigator>
    </NavigationContainer>




export default MyTabs;