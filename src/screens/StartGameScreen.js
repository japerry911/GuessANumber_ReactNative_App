import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = () => {
    return (
        <View style={styles.screenStyle}>
            <Text style={styles.titleStyle}>Start a New Game!</Text>
            <View style={styles.inputViewStyle}>
                <Card style={styles.inputCardStyle}>
                    <Text>Select a Number</Text>
                    <TextInput />
                    <View style={styles.buttonViewStyle}>
                        <Button title='Reset' />
                        <Button title='Confirm' />
                    </View>
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputCardStyle: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
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