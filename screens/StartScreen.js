import React, { useState, useRef, useEffect } from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Alert
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import BodyText from '../components/Text/BodyText'



const StartScreen  = (props) => {
    const textOutputFirst = <Text>I'm Ready</Text>;
    const textOutputSecond = <Text>Are You Sure?</Text>;
    const textOutputLast = <Text>OKAY, let's do it!</Text>;

    const textBotomOutput = <Text>no, {"\n"} I'm not Ready... {roundsClick}</Text>
    const textBotomOutputFin =  <Text>
                                    <Text style={styles.line}>no</Text>, {"\n"}{' '}
                                    <Text style={styles.highlight}>I'm</Text> {' '} 
                                    <Text style={styles.line}>not</Text> {' '} 
                                    <Text style={styles.highlight}>Ready</Text>
                                    ...
                                </Text>; 

    const [ myText, setMyText ] = useState(textBotomOutput);
    const [textOutput, setTextOutput] = useState(textOutputFirst);

    const [roundsClick, setRoundsClick] = useState(0);
    const [userChoice, setUserChoice] = useState(props.userChoice);
    
    

    const resetInputHandler = () => {
        setRoundsClick(0);
        setTextOutput(textOutputFirst);
        setMyText(textBotomOutput);
        //setResetChoice(true);
    };   

    const noReadyHandler = () => {
        if (!userChoice) {            
            Alert.alert('NOT READY?', 'Well, come back later...', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
        };
        
        
    };
    
    onPress = () => {
        setRoundsClick(roundsClick +1);

        if 
        (roundsClick === -1) {
            setTextOutput(textOutputFirst);
        }
        else if 
            (roundsClick === 0) {
                setTextOutput(textOutputSecond);  
        }
        else if 
            (roundsClick === 1) {
               setTextOutput(textOutputLast);
               setMyText(textBotomOutputFin);
        }

        else if (roundsClick > 1){
            props.onStart(true);
        }
    }
    
        return (
            <View style={styles.screen}>

                {/* button  */}
                <View style={styles.container}>
              
                    <TouchableOpacity activeOpacity={0.6} onPress={this.onPress}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>{ textOutput }</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                {/* text */}
                <View>
                    <TouchableOpacity activeOpacity={0.6} onPress = {noReadyHandler} >
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
        padding: 100,
        alignItems: 'center'
    },
    conainer:{
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