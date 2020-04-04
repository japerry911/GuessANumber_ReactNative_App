import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

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
            <TitleText>Skylord's Guess:</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonCardStyle}>
                <MainButton 
                    onPress={() => nextGuessHandler('lower')} 
                >
                    <Ionicons 
                        name='md-remove' 
                        size={24}
                        color='white'
                    />
                </MainButton>
                <MainButton 
                    onPress={() => nextGuessHandler('greater')}
                >
                    <Ionicons
                        name='md-add'
                        size={24}
                        color='white'
                    />
                </MainButton>
            </Card>
            <Card style={styles.directionsCardStyle}>
                <TitleText style={styles.directionsTitleStyle}>Directions:</TitleText>
                <BodyText>
                    Press the - button if Skylord's Guess is lower than your number, otherwise
                    if it's greater, press the + button.
                </BodyText>
            </Card>
            <View style={styles.imageViewStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={require('../../assets/PlayingSkylord.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageViewStyle: {
        borderRadius: 200,
        borderColor: Colors.primary,
        borderWidth: 3,
        overflow: 'hidden',
        width: 300,
        height: 300
    },
    imageStyle: {
        height: '100%',
        width: '100%'
    },
    directionsTitleStyle: {
        textAlign: 'center',
        marginBottom: 10
    },
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
        maxWidth: '70%'
    },
    directionsCardStyle: {
        marginVertical: 50
    }
});

export default GameScreen;