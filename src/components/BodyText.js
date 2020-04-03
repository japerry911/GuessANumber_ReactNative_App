import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ children }) => <Text style={styles.textStyle}>{children}</Text>;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'open-sans'
    }
});

export default BodyText;