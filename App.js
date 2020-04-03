import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guesses, setGuesses] = useState(0);

  const startGameHandler = number => {
    setUserNumber(number);
    setGuesses(0);
  };

  const gameOverHandler = numOfGuesses => {
    setGuesses(numOfGuesses);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />

  if (userNumber && guesses <= 0) {
    content = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  } else if (guesses > 0) {
    content = <GameOverScreen />
  }

  return (
    <View style={styles.screenStyle}>
      <Header title={'Guess a Number'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1
  }
});
