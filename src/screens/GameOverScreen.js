import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = ({ guesses, userNumber, newGameHandler }) => {
    return (
        <View style={styles.screenStyle}>
            <TitleText>Game Over!</TitleText>
            <BodyText>Number of Guesses: {guesses}</BodyText>
            <BodyText>Number was: {userNumber}</BodyText>
            <Button 
                title='NEW GAME'
                onPress={newGameHandler}
            />
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