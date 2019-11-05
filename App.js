import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <Text>TODO LIST</Text>

      <View 
      style={{ flexDirection: 'row', justifyContent: 'space-between'}}
      >
        
        <TextInput 
        placeholder="Course Goal"
        style={{ borderColor: 'black', borderWidth: 1, padding: 5}}

        />
        <Button 
        title="ADD"
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
