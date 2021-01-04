import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

// import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import BodyText from '../components/Text/BodyText'



const StartScreen = (props) => {
    const output = ["I\'m Ready", "Are You Sure?", "OKAY, let's do it!"];

    const textBotomOutput = <Text>No. {"\n"} I'm not Ready...</Text>
    const textBotomOutputFin = <Text>
        <Text style={styles.line}>No</Text>.{"\n"}{' '}
        <Text style={styles.highlight}>I'm</Text> {' '}
        <Text style={styles.line}>not</Text> {' '}
        <Text style={styles.highlight}>Ready</Text>
                                    ...
                                </Text>;

    const [myText, setMyText] = useState(textBotomOutput);
    const [textOutput, setTextOutput] = useState(output[0]);

    const [roundsClick, setRoundsClick] = useState(0);
    const [userChoice, setUserChoice] = useState(props.choice);



    const resetInputHandler = () => {
        setRoundsClick(0);
        setTextOutput(output[0]);
        setMyText(textBotomOutput);
        //setResetChoice(true);
    };

    const noReadyHandler = () => {
        if (!userChoice) {
            Alert.alert('NOT READY?', 'Well, come back later...', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
        };
    };

    const onPress = () => {
        setRoundsClick(roundsClick + 1);

        if
            (roundsClick === -1) {
            setTextOutput(output[0]);
        }
        else if
            (roundsClick === 0) {
            setTextOutput(output[1]);
        }
        else if
            (roundsClick === 1) {
            setTextOutput(output[2]);
            setMyText(textBotomOutputFin);
        }
        else if (roundsClick > 1) {
            props.onPress(true);
        }
    }

    return (
        <View style={styles.screen}>

            {/* button  */}
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{textOutput}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* text   */}
            <View>
                <TouchableOpacity activeOpacity={0.6} onPress={noReadyHandler} >
                    <BodyText style={styles.box}>
                        {myText}
                    </BodyText>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 150,
        alignItems: 'center'
    },
    conainer: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.primary,
    },
    line: {
        textDecorationLine: 'line-through'
    },
    box: {
        paddingTop: 20,
        width: '100%',
        textAlign: 'center'
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    },
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
        //height: 10,
        paddingTop: '25%',
        paddingBottom: '25%',
        textAlign: 'center',
        color: Colors.my_white,
        fontFamily: 'my-font-1',
        fontSize: 60,

        textAlignVertical: 'top'
    }
});

export default StartScreen;
