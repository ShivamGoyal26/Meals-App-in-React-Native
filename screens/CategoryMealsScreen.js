import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const CategoryMealScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Text>The Catgory Meal Screen</Text>
            <Button title="Go to the Meals " onPress={
                () => 
                    props.navigation.navigate('Meal Detail')
            } />
            <Button title="Click Me" onPress={() => {
                props.navigation.pop();

            }} />
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealScreen;