import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';
import BodyText from '../components/BodyText';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.viewStyle}>
            <BodyText style={styles.numberTextStyle}>{children}</BodyText>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberTextStyle: {
        color: Colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;