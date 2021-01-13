import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Image,
 } from 'react-native';
import { color } from 'react-native-reanimated';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import Colors from '../constants/Colors';

import { MEALS } from '../data/dummy-data';
import Header from '../shared/header';

const MealDetailScreen = props => {
    const mealId = props.route.params.mealid;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (

        <View style={styles.wrapper}>
            <Header
                titleText={selectedMeal.title}
                onSelect={() => {
                    props.navigation.pop();
                }} />
            <ScrollView>
            <View style={styles.scrollViewWrapper}>
            <View style={styles.imageThing}>
                            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.bgImage}/>
                            </View>
                            <View style={styles.mealRow}>
                    
                            <View style={styles.littleDetails}>
                            <MaterialIcons name='timer'size={26} color={Colors.primaryColor}/>
                            <Text style={styles.textColor}> {selectedMeal.duration} M</Text>
                            </View>
                            <View style={styles.littleDetails}>
                            <MaterialIcons name='work'size={26} color={Colors.primaryColor}/>
                            <Text style={styles.textColor}> {selectedMeal.complexity.toUpperCase()}</Text>
                            </View>
                            <View style={styles.littleDetails}>
                            <MaterialIcons name='attach-money'size={26} color={Colors.primaryColor}/>
                            <Text style={styles.textColor}> {selectedMeal.affordability.toUpperCase()}</Text>
                            </View>
                            </View>
                            <View style={styles.ingredientswrapper}>
                            <Text style={styles.ingredients}>INGREDIENTS</Text>
                            
                            </View>
                            <View style={styles.detail}>
                            {selectedMeal.ingredients.map(ingredient => <Text style={styles.textColor} key={ingredient}>{ingredient}</Text>)}
                            </View>
                            <View style={styles.ingredientswrapper}><Text style={styles.ingredients}>STEPS</Text>
                            
                            </View>
                            <View style={styles.detail}>
                            {selectedMeal.steps.map(step => <Text style={styles.textColor} key={step}>{step}</Text>)}
                            </View>
                            </View>
                            
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({

    // Main Thing

    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    scrollViewWrapper:{
        padding: 10,
    },
//    Image Done

    bgImage: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    imageThing: {
        height: 250,
        width: '100%',
    },
    
//  complexity affordability and duration

     mealRow: {
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textColor: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    littleDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // Ingredients

    ingredientswrapper: {
        alignItems: 'center',
        marginVertical: 10,
    },

    ingredients:{
        fontSize: 20,
        color: 'black',
    },
    detail:{
        marginVertical: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});

export default MealDetailScreen;