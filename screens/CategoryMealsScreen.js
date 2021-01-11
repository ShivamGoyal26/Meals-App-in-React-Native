import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';


const CategoryMealScreen = (props) => {
const catid = props.route.params;

const selectedCategory = CATEGORIES.find(cat => cat.id ===catid.catgoryId);

    return (
        <View style={styles.screen}>
            <Text>The Catgory Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to the Meals " onPress={
                () => 
                    props.navigation.navigate('Meal Detail')
            } />
            <Button title={catid.catgoryId} onPress={() => {
                props.navigation.pop();

            }} />
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
        const catid = navigationData.route.params;
        const selectedCategory = CATEGORIES.find(cat => cat.id ===catid.catgoryId);
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