import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleText = props => <View style={{...styles.title, ...props.style}}>{props.children}</View>;

const styles = StyleSheet.create({
    title: {

    }
});

export default TitleText;