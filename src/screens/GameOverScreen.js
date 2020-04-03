import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = () => {
    return (
        <View style={styles.screenStyle}>
            <Text>Game Over Screen!!</Text>
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