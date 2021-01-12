import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import Colors from '../constants/Colors';

const MealItem = props => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.mealItem}>
                <TouchableOpacity onPress={props.onSelectMeal}>

                    <View >
                        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                            <Image source={{ uri: props.image }} style={styles.bgImage} >

                            </Image>
                        </View>
                        <View style={styles.titleContainer}>
                        <Text style={styles.headLine}>{props.title}</Text>
                        </View>
                       
                        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                            <View style={styles.littleDetails}>
                                <MaterialIcons name='timer' size={26} color={Colors.primaryColor} onPress={props.onSelect} />
                                <Text style={styles.textColor}> {props.duration}M</Text>
                            </View>
                            <View style={styles.littleDetails}>
                                <MaterialIcons name='work' size={26} color={Colors.primaryColor} onPress={props.onSelect} />
                                <Text style={styles.textColor} > {props.complexity.toUpperCase()}</Text>
                            </View>
                            <View style={styles.littleDetails}>
                                <MaterialIcons name='attach-money' size={26} color={Colors.primaryColor} onPress={props.onSelect} />
                                <Text style={styles.textColor}> {props.affordability.toUpperCase()}</Text>
                            </View>



                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        marginBottom: 25,
    },
    mealHeader: {
        height: '70%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    headLine:{
        fontSize: 17,
        color: '#C0C0C0',
        
    },
    mealItem: {
        height: 300,
        width: '100%',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        overflow: 'hidden',


    },
    textColor: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
    },
    mealRow: {
        flexDirection: 'row',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '15%',
        justifyContent: 'center',
    },

    littleDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

});

export default MealItem;