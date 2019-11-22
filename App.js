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
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setdataLoaded] = useState(false);
  const [userChoice, setUserChoice] = useState(false);

  const startHandler = () => {
     setUserChoice(true);
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

  const mainHandler = numOfRounds =>{
    setRounds(numOfRounds);
    return numOfRounds;
  };

  let content = <StartScreen onMain={mainHandler} />;

   if (rounds > 2) {
     // <GameScreen userChoice={true} onGameOver={gameOverHandler} />
     content = (
      
       <MainScreen userChoice={true} onStart={startHandler} />
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