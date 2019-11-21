import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

import Colors from '../../constants/colors'
const StartButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ props.children }</Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: Colors.my_black, 
        backgroundColor: Colors.basic_menta,
        marginTop: 55,
        paddingTop: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.my_white,
        fontFamily: 'my-font-1',
        fontSize: 60
    }
});

export default StartButton;