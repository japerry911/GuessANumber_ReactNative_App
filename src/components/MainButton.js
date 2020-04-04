import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            activeOpacity={.25}
        >
            <View style={styles.buttonViewStyle}>
                <Text style={styles.buttonTextStyle}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonViewStyle: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonTextStyle: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;