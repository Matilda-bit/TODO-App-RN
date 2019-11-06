import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return(
        <View style={styles.inputContener}>
            <TextInput 
                style={styles.input} 
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value={props.todoInput}/>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    inputContener: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        shadowOffset: {width: 0, height:3},
        shadowColor: '#171717',
        shadowOpacity: .1,
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        height: 35,
        width:100,
        backgroundColor: '#FFCE00',
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700'
    }
}
)
export default InputBar;