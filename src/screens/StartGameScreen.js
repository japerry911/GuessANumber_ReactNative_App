import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({ startGameHandler }) => {
    const [inputNumber, setInputNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [officialNumber, setOfficialNumber] = useState('');
    
    const inputNumberHandler = inputNumber => {
        setInputNumber(inputNumber.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setInputNumber('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(inputNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99 (Including).', 
            [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setOfficialNumber(chosenNumber);
        setInputNumber('');
    };

    let confirmedNumber;

    if (confirmed) {
        confirmedNumber = <Card style={styles.officialNumberViewStyle}>
                            <Text>You Selected:</Text>
                            <NumberContainer>
                                <Text>{officialNumber}</Text>
                            </NumberContainer>
                            <Button 
                                title='Start Game'
                                onPress={() => startGameHandler(officialNumber)}
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
                            onChangeText={inputNumberHandler}
                            value={inputNumber}
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
                    {confirmedNumber}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    officialNumberViewStyle: {
        marginTop: 40,
        alignItems: 'center'
    },
    officialNumberStyle: {
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