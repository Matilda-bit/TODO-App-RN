import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

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
  // return (
  //   // <View style={styles.container}>
  //   //   <Text>Open up App.js to start working on your app!</Text>
  //   //   <StatusBar style="auto" />
  //   // </View>
  // );

  const [dataLoaded, setDataLoaded] = useState(false);
  const [userChoice, setUserChoice] = useState(false);



  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => err}
      />
    );
  };

  const onStartHandler = (userChoice) => {
    setUserChoice(userChoice);
  }

  let content = <StartScreen choice={userChoice} onPress={onStartHandler} />;

  if (userChoice) {
    content = (
      <MainScreen />
    );
  };

  return (
    <View style={styles.container}>
      {content}
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
