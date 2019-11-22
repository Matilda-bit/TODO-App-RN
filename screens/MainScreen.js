import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
// import { Ionicons } from 'expo/vector-icon';

import Header from '../components/Header';
import InputBar from '../components/InputBar';
import Colors from '../constants/colors';


const MainScreen = props => {
        return (
            <View style={styles.container}>
                <View style={styles.statusbar}></View>
                {/* <Header title= "TODO APP" /> */}

            </View>
        );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    statusbar: { 
        backgroundColor: Colors.basic_menta,
        height: 24
      }
});

export default MainScreen;