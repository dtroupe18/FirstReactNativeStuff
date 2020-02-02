import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        // { name: 'Friend #1', key: '1' } one way to add keys to make the list happy
        { name: 'Friend #1', key: '1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        { name: 'Friend #4' },
        { name: 'Friend #5' },
        { name: 'Friend #6' },
        { name: 'Friend #7' },
        { name: 'Friend #8' },
        { name: 'Friend #9' }
    ]

    return (
        <FlatList
            // horizontal
            showsVerticalScrollIndicator={false}
            keyExtractor={ friend => friend.name }
            data={friends}
            // could do item instead of element if you don't want the index
            renderItem={(element) => {
                // element === { item: { name: 'Friend #1' }, index: 0 }
                return <Text style={styles.textStyle}>{element.item.name}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;