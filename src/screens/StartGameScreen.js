import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = () => {
    const [guess, setGuess] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [officialGuess, setOfficialGuess] = useState('');
    
    const inputGuessHandler = inputGuess => {
        setGuess(inputGuess.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setGuess('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(guess);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99 (Including).', 
            [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setOfficialGuess(chosenNumber);
        setGuess('');
    };

    let confirmedGuess;

    if (confirmed) {
        confirmedGuess = <Card style={styles.officialGuessViewStyle}>
                            <Text>You Selected:</Text>
                            <NumberContainer>
                                <Text>{officialGuess}</Text>
                            </NumberContainer>
                            <Button 
                                title='Start Game'
                            />
                        </Card>;
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screenStyle}>
                <Text style={styles.titleStyle}>Start a New Game!</Text>
                <View style={styles.inputViewStyle}>
                    <Card style={styles.inputCardStyle}>
                        <Text>Select a Number</Text>
                        <Input 
                            style={styles.textInputStyle} 
                            keyboardType='numeric' 
                            maxLength={2}
                            onChangeText={inputGuessHandler}
                            value={guess}
                        />
                        <View style={styles.buttonViewStyle}>
                            <View style={styles.resetButtonStyle}>
                                <Button 
                                    title='Reset' 
                                    color='black'
                                    onPress={resetInputHandler}
                                />
                            </View>
                            <View style={styles.confirmButtonStyle}>
                                <Button 
                                    title='Confirm' 
                                    color='black'
                                    onPress={confirmInputHandler}
                                />
                            </View>
                        </View>
                    </Card>
                    {confirmedGuess}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    officialGuessViewStyle: {
        marginTop: 40,
        alignItems: 'center'
    },
    officialGuessStyle: {
    },
    inputViewStyle: {
        alignItems: 'center'
    },
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