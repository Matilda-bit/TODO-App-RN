import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
    body: {
        fontFamily: 'my-font-2',
        fontSize: 24,
        color: '#343434'
    }
});

export default BodyText;