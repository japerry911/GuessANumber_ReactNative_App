import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = ({ title }) => {
    return (
        <View style={styles.headerViewStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerViewStyle: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextStyle: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;