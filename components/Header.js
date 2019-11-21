import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';


const Header = (props) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#171717',
        // backgroundColor: Colors.basic,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: Colors.my_white,
        // color: Colors.basic,
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
});

export default Header;