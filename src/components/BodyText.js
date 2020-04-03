import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style={{ ...styles.textStyle, ...props.style }}>{props.children}</Text>;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'open-sans'
    }
});

export default BodyText;