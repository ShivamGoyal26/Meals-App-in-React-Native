import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                onSelect={() => {
                    // props.navigation.setOptions({title: itemData.item.name})
                    props.navigation.navigate('Category', {
                        // navigation.setOptions({title: itemData.item.name})
                        // name: itemData.item.name,
                        catgoryId: itemData.item.id,
                    });
                }}
                color={itemData.item.color}
            />
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default CategoriesScreen;