import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import StartButton from '../components/Buttons/StartButton';


const StartScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                {/* <Button title='Start' style={styles.buttonContainer} /> */}
                <StartButton onPress={() => props.onStart()}>
                    I'm Ready
                </StartButton>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 100,
        alignItems: 'center'
    },
    conainer:{
        width: '100%',
        height: '100%',
    }
});

export default StartScreen;