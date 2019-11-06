import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return(
        <View style={styles.inputContener}>
            <TextInput style={styles.input} />

        </View>
    )
}

const styles = StyleSheet.create({
    inputContener: {
        
    },
    input: {}
    }
)
export default InputBar;