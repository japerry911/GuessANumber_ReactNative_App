import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const StartGameScreen = () => {
    return (
        <View style={styles.screenStyle}>
            <Text style={styles.titleStyle}>Start a New Game!</Text>
            <View style={styles.inputViewStyle}>
                <Card style={styles.inputCardStyle}>
                    <Text>Select a Number</Text>
                    <Input style={styles.textInputStyle} keyboardType='numeric' maxLength={2}/>
                    <View style={styles.buttonViewStyle}>
                        <View style={styles.resetButtonStyle}>
                            <Button 
                                title='Reset' 
                                color='black'
                            />
                        </View>
                        <View style={styles.confirmButtonStyle}>
                            <Button 
                                title='Confirm' 
                                color='black'
                            />
                        </View>
                    </View>
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    resetButtonStyle: {
        backgroundColor: '#ff9999',
        marginRight: 5,
        flex: 1,
        borderRadius: 10
    }, 
    confirmButtonStyle: {
        backgroundColor: 'lightgreen',
        marginLeft: 5, 
        flex: 1,
        borderRadius: 10
    },
    inputCardStyle: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        marginTop: 15
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
        paddingHorizontal: 15,
    },
    textInputStyle: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;