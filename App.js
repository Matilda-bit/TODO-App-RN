import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import StartScreen from './screens/StartScreen';
import MainScreen from './screens/MainScreen';


const fetchFonts = () => {
  return Font.loadAsync({
      'my-font-1': require('./assets/fonts/Amatic-Bold.ttf'),
      'my-font-2': require('./assets/fonts/FFF.ttf'),
      'my-font-3': require('./assets/fonts/Lato-Bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setdataLoaded] = useState(false);
  const [userChoice, setUserChoice] = useState();
  


  if(!dataLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setdataLoaded(true)} 
        onError={(err) => err} 
      />
    );
  };

  const onStartHandler = (userChoice) => {
    setUserChoice(userChoice);
  }

  let content = <StartScreen onStart={onStartHandler} />;

   if ( userChoice ) {
     content = (
      
       <MainScreen />
       );
     };

  return(
    <View style={styles.screen}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});