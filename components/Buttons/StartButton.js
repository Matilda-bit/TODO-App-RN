import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

const StartButton = props => {
    const textOutputFirst = <Text>I'm Ready</Text>;
    const textOutputSecond = <Text>Are You Sure?</Text>;
    const textOutputLast = <Text>OKAY, let's do it!</Text>;
    
    const [textOutput, setTextOutput] = useState(textOutputFirst);
    const [ count, setCount ] = useState(0);

    
    onPress = () => {
        setCount(count+1);
        props.onPress;

        if 
        (count === -1) {
            setTextOutput(textOutputFirst);
        }
        else if 
            (count === 0) {
                setTextOutput(textOutputSecond);  
        }
        else if 
            (count === 1) {
               setTextOutput(textOutputLast);
        }
        else if 
         (count > 1) {
             //go to MainScreen
        }  
    } 
    

        return (
            <TouchableOpacity activeOpacity={0.6} onPress={this.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{textOutput}</Text>
                </View>
            </TouchableOpacity>
            
        );

    
};

const styles = StyleSheet.create({
    button: {
        width: 260,
        height: 260,
        borderRadius: 135,
        borderWidth: 3,
        borderColor: Colors.my_black, 
        backgroundColor: Colors.basic_menta,
        paddingTop: 14
       
    },
    buttonText: {
        paddingTop: '25%',
        paddingBottom: '25%',
        textAlign: 'center',
        color: Colors.my_white,
        fontFamily: 'my-font-1',
        fontSize: 60,
        
        textAlignVertical: 'top'
    }
});

export default StartButton;