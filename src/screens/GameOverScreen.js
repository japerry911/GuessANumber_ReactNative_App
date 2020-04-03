import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = ({ guessNumber, userNumber }) => {
    return (
        <View style={styles.screenStyle}>
            <Text>Game Over!</Text>
            <Text>Number of Guesses: {guessNumber}</Text>
            <Text>Number was: {userNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;