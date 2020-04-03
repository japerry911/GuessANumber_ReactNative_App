import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = ({ title }) => {
    return (
        <View style={styles.headerViewStyle}>
            <TitleText style={styles.headerTextStyle}>{title}</TitleText>
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