import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screenStyle}>
      <Header title={'Guess a Number'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1
  }
});
