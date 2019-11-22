import React, { useState, useRef, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import StartButton from '../components/Buttons/StartButton';
import BodyText from '../components/Text/BodyText'



const StartScreen  = props => {

    const [roundsClick, setRoundsClick] = useState(0);


    onPress = () => {
        setRoundsClick(roundsClick +1);
        if (roundsClick > 1){
            //props.onPress;
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
                    <BodyText style={styles.box}>
                        no, {"\n"}
                        I'm not Ready... {roundsClick}
                    </BodyText>
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