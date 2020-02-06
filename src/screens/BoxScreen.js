import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        width: 100,
        height: 100,
        // marginTop: 50,
        alignSelf: 'flex-end',
        backgroundColor: 'green'
    },
    viewThreeStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
    }
});

export default BoxScreen;