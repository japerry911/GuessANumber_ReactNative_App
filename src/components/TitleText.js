import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => <Text style={{ ...styles.textStyle, ...props.style }}>{props.children}</Text>;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

export default TitleText;