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
  const [roundsClick, setroundsClick] = useState(0);
  const [userChoice, setUserChoice] = useState(false);
  
  onPress = () => {
    setroundsClick(roundsClick+1);
    if (roundsClick > 2){
      setUserChoice(true);
    }
  }

  if(!dataLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setdataLoaded(true)} 
        onError={(err) => err} 
      />
    );
  };

  let content = <StartScreen />;

   if ( userChoice > true ) {
     // <GameScreen userChoice={true} onGameOver={gameOverHandler} />
     content = (
      
       <MainScreen onStart={onMain} />
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