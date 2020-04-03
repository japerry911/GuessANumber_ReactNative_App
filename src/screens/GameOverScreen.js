import React from 'react';
import { View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = ({ guesses, userNumber, newGameHandler, imageSrc }) => {
    return (
        <ImageBackground 
            style={styles.screenStyle}
            source={{ uri: 'https://wallpaperaccess.com/full/325243.jpg' }}
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
            <BodyText style={styles.textStyle}>Number of Guesses: {guesses}</BodyText>
            <BodyText style={styles.lastTextStyle}>Number was: {userNumber}</BodyText>
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
    buttonViewStyle: {
        marginTop: 20,
        borderWidth: 5,
        backgroundColor: '#4d4d4d',
        borderRadius: 20,
    },
    subtitleViewStyle: {
        backgroundColor: '#4d4d4d',
        padding: 10,
        borderRadius: 20
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
        height: 400,
        width: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        transform: [
            { rotateX: '20deg' },
            { rotateY: '20deg' }
        ],
        marginVertical: 30
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