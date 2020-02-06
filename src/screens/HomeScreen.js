import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation}) => {
  // console.log(props);

  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />

      <Button
        onPress={() => navigation.navigate('ImageScreen')}
        title="Go to Image Demo"
      />

      <Button
        onPress={() => navigation.navigate('CounterScreen')}
        title="Go to Counter Demo"
      />

      <Button
        onPress={() => navigation.navigate('ColorScreen')}
        title="Go to Color Demo"
      />
      
      <Button
        onPress={() => navigation.navigate('SquareScreen')}
        title="Go to Square Screen"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      
    </View>
  ); 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;