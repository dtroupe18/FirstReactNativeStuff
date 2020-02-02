import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const titleText = 'Getting started with React Native!'
    const name = 'Dave';

    return (
        <View>
            <Text style={styles.textStyle}>{titleText}</Text>
            <Text style={{fontSize: 20}}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({ 
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;