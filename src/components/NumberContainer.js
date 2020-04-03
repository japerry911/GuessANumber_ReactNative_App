import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.numberTextStyle}>{children}</Text>
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