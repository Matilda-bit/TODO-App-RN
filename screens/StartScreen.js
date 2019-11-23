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
import StartButton from '../components/Buttons/StartButton';
import BodyText from '../components/Text/BodyText'



const StartScreen  = (props) => {

    const [roundsClick, setRoundsClick] = useState(0);
    const [userChoice, setUserChoice] = useState(props.userChoice);
    
    // const onPressAlert = (props) = {
    //     if() {
    //         Alert.alert(
    //             'no Ready?',
    //             'Go Home', 
    //             [{ text: 'Okay', style: 'destructive', onPress: onPress }]
    //         );
    //     }
        
    // };

    onPress = () => {
        setRoundsClick(roundsClick +1);
        if (roundsClick > 1){
            props.onStart(true);
        }
    }
    
        return (
            <View style={styles.screen}>

                {/* button  */}
                <View style={styles.container}>

                <Text style={[styles.countText]}>
                        { this.roundsClick !== 0 ? this.roundsClick: null}
                </Text>
                <StartButton onPress={this.onPress}>
                    <Text style={styles.boxButton}></Text>
                </StartButton>

                </View>

                {/* text */}
                <View>
                    <TouchableOpacity activeOpacity={0.6} >
                    <BodyText style={styles.box}>
                        no, {"\n"}
                        I'm not Ready... {roundsClick}
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
    boxButton: {
        height: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
      },
    countText: {
        color: '#FF00FF'
      }
});

export default StartScreen;