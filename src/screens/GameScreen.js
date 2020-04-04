import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

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

const GameScreen = ({ userNumber, onGameOver }) => {
    // Once state is set, it won't be overwritten by useState on re-renders
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber));
    const [numOfGuesses, setNumOfGuesses] = useState(0);
    const currentMin = useRef(1);
    const currentMax = useRef(100);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(numOfGuesses)
        }
    }, [currentGuess, userNumber, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
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

        setNumOfGuesses(numOfGuesses + 1);

        const nextNumberGuess = generateRandomBetween(currentMin.current, currentMax.current, currentGuess);
        setCurrentGuess(nextNumberGuess);
    };

    return (
        <View style={styles.screenStyle}>
            <Text>Opponent's Guess:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonCardStyle}>
                <MainButton 
                    onPress={() => nextGuessHandler('lower')} 
                >
                    LOWER
                </MainButton>
                <MainButton 
                    onPress={() => nextGuessHandler('greater')}
                >
                    GREATER
                </MainButton>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonCardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    }
});

export default GameScreen;