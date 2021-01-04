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
        width: 30,
        height: 20,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: Colors.my_black, 
        // backgroundColor: Colors.basic_menta
        backgroundColor: '#00afa3'
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.my_white,
        fontFamily: 'my-font-2',
        fontSize: 18
    }
});

export default StartButton;
