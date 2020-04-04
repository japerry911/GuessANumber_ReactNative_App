import React from 'react';
import { View, StyleSheet, Button, Image, ImageBackground, Text } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = ({ guesses, userNumber, newGameHandler, imageSrc }) => {
    return (
        <ImageBackground 
            style={styles.screenStyle}
            source={require('../../assets/GuessBackground.jpg')}
        >
            <View style={styles.screenStyle}>
                <View style={styles.subtitleViewStyle}>
                    <TitleText style={styles.whiteTextStyle}>Game Over, Sky Guessed Your Number!</TitleText>
                </View>
                <View style={styles.imageViewStyle}>
                    <Image 
                        style={styles.imageStyle} 
                        source={require('../../assets/SuccessSkylord.png')} 
                    />
                </View>
                <View style={styles.subtitleViewStyle}>
                    <BodyText style={styles.textStyle}>
                        Number of Guesses: <Text style={styles.hightlightStyle}>{guesses}</Text>
                    </BodyText>
                    <BodyText style={styles.lastTextStyle}>
                        Number was: <Text style={styles.hightlightStyle}>{userNumber}</Text>
                    </BodyText>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button 
                        title='NEW GAME'
                        onPress={newGameHandler}
                        color='white'
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    hightlightStyle: {
        color: Colors.primary
    },
    buttonViewStyle: {
        marginTop: 20,
        borderWidth: 5,
        backgroundColor: '#4d4d4d',
        borderRadius: 20,
        borderColor: Colors.primary,
        borderWidth: 3,
        shadowOffset: { height: 10, width: 10 },
        shadowOpacity: 1
    },
    subtitleViewStyle: {
        borderColor: Colors.primary,
        borderWidth: 3,
        backgroundColor: '#4d4d4d',
        padding: 10,
        borderRadius: 20,
        shadowOffset: { height: 10, width: 10 },
        shadowOpacity: 1
    },
    whiteTextStyle: {
        color: 'white'
    },
    textStyle: {
        marginVertical: 10,
        color: 'white',
        fontSize: 20
    },
    lastTextStyle: {
        marginBottom: 10,
        color: 'white',
        color: 'white',
        fontSize: 20
    },
    imageViewStyle: {
        height: 300,
        width: 200,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary,
        overflow: 'hidden',
        marginVertical: 50
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    screenStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;