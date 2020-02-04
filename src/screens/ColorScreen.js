import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button 
                title="Add a color" 
                onPress={() => { 
                   console.log('add color pressed!');
                   setColors([...colors, randomRgb()]);
                }}
            />
            
            <FlatList 
                keyExtractor={(item) => item }
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                    );
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor((Math.random() * 255));
    const blue = Math.floor((Math.random() * 255));
    const green = Math.floor((Math.random() * 255));

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;