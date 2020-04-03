import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max)

    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};

const GameScreen = ({ userGuess }) => {
    // Once state is set, it won't be overwritten by useState on re-renders
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userGuess));
    const currentMin = useRef(1);
    const currentMax = useRef(100);

    const nextGuessHandler = direction => {
        console.log(direction, currentGuess, userGuess);
        if ((direction === 'lower' && currentGuess < userGuess) ||
            (direction === 'greater' && currentGuess > userGuess)) {
            Alert.alert('Liar!', 'Comon that isn\'t true.', 
            [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        // Doesn't re-render component since useRef is being used
        if (direction === 'lower') {
            currentMax.current = currentGuess;
        } else {
            currentMin.current = currentGuess;
        }

        const nextNumberGuess = generateRandomBetween(currentMin.current, currentMax.current, currentGuess);
        setCurrentGuess(nextNumberGuess);
    };

    return (
        <View style={styles.screenStyle}>
            <Text>Opponent's Guess:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonCardStyle}>
                <Button 
                    title="LOWER"
                    onPress={() => nextGuessHandler('lower')} 
                />
                <Button 
                    title="GREATER"
                    onPress={() => nextGuessHandler('greater')}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonCardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;