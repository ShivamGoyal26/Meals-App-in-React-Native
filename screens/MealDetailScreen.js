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
                            <View style={styles.ingredientswrapper}><Text style={styles.ingredients}>INGREDIENTS</Text></View>
                            <View style={styles.ingredientswrapper}><Text style={styles.ingredients}>STEPS</Text></View>
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
    },
    littleDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // Ingredients

    ingredientswrapper: {
        alignItems: 'center',
    },

    ingredients:{
        fontSize: 20,
        color: '#C0C0C0',
    },
});

export default MealDetailScreen;