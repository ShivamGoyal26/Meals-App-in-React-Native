import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import MainHeader from '../shared/MainHeader';



const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate('Category', {
                        catgoryId: itemData.item.id,
                        title: itemData.item.title,
                    });
                }}
                color={itemData.item.color}
                imageUrl = {itemData.item.imageUrl}
            />
        );
    };

    return (
        <View style={styles.wrapper}>
            <MainHeader titleText="Meals" onSelect={() => {
                props.navigation.toggleDrawer();
            }} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2} />
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },

});

export default CategoriesScreen;