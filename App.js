import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>

      <View 
      style={{padding: 50}}>
        <Text>TODO LIST</Text>
        <TextInput 
        placeholder="Course Goal"
        style={{ padding: 10}}

        />
        <Button 
        title="ADD"
        style={{padding: 20}}
        />

      </View>

      <View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
