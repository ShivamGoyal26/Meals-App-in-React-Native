import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MealItem = props => {
    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress = {props.onSelectMeal}>
             <View>
             <View style={{...styles.mealRow, ...styles.mealHeader}}> 
             <Text>{props.title}</Text>
             </View>
            <View style = {{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{props.duration}m</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
       
    );
};

const styles = StyleSheet.create({
    mealHeader: {
        height: '80%',
    },
    mealDetail:{

    },
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
    },
    mealRow: {
        flexDirection: 'row',
    },
    
});

export default MealItem;