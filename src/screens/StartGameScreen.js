import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StartGameScreen = () => {
    return (
        <View styles={styles.screenStyle}>
            <Text>Game Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default StartGameScreen;