import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15

// state === { red: number, gree: number, blue: number }
// action === { colorToChange: `red`, amount: number }
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? 
            state : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? 
            state :  { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ?
            state : { ...state, blue: state.blue + action.amount };
        default:
            // Always return a state object!
            return state;
    }
};

const SquareScreen = () => {
    const [state, runReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state; // Destructoring

    console.log(`state: r${state.red}, g${state.green}, b${state.blue}`);

    return (
        <View>
            <ColorCounter 
                onIncrease={() => runReducer({colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => runReducer({colorToChange: 'red', amount: -COLOR_INCREMENT })}
                color="Red" 
            />

            <ColorCounter 
                onIncrease={() => runReducer({colorToChange: 'green', amount: COLOR_INCREMENT })} 
                onDecrease={() => runReducer({colorToChange: 'green', amount: COLOR_INCREMENT })}
                color="Green"
            />
            
            <ColorCounter
                onIncrease={() => runReducer({colorToChange: 'blue', amount: COLOR_INCREMENT })} 
                onDecrease={() => runReducer({colorToChange: 'blue', amount: -COLOR_INCREMENT })}
                color="Blue"
            />

            <View style={{ 
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;