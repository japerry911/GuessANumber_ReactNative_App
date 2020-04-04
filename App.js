import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const cacheResourceAsync = async () => {
  const images = [require('./assets/GuessBackground.jpg')];

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });

  return Promise.all(cacheImages);
}


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guesses, setGuesses] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const _loadAssetsAsync = async () => {
    const fontAssets = fetchFonts();
    const imageAssets = cacheResourceAsync();
  
    await Promise.all([imageAssets, fontAssets]);
  }

  if (!isLoading) {
    console.log('here');
    return (
      <AppLoading 
        startAsync={_loadAssetsAsync} 
        onFinish={() => setIsLoading(true)}
        onError={error => console.error(error)}
      />
    );
  }

  const startGameHandler = number => {
    setUserNumber(number);
    setGuesses(0);
  };

  const gameOverHandler = numOfGuesses => {
    setGuesses(numOfGuesses);
  };

  const newGameHandler = () => {
    setGuesses(0);
    setUserNumber(undefined);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />

  if (userNumber && guesses <= 0) {
    content = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  } else if (guesses > 0) {
    content = <GameOverScreen guesses={guesses} userNumber={userNumber} newGameHandler={newGameHandler} />
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
