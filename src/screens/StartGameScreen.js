import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = () => {
    return (
        <View style={styles.screenStyle}>
            <Text style={styles.titleStyle}>Start a New Game!</Text>
            <View style={styles.inputViewStyle}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonViewStyle}>
                    <Button title='Reset' />
                    <Button title='Confirm' />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputViewStyle: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 20,
        marginVertical: 10
    },
    screenStyle: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;