import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [userGuess, setUserGuess] = useState();

  const startGameHandler = guess => {
    setUserGuess(guess);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />

  if (userGuess) {
    content = <GameScreen userGuess={userGuess} />
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
