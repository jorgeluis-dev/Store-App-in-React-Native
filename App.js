import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Home from './src/screens/Home/index';
import AppLoading from 'expo-app-loading';
import { CustomText } from './src/components/atoms/CustomText';
import { ThemeProvider} from 'styled-components'
import { 
    useFonts, 
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
   } from '@expo-google-fonts/source-sans-pro';
import { theme } from './src/styles'
import SplashScreen from './src/screens/SplashScreen';
import { Routes } from './src/routes/index';

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return (
        <ThemeProvider theme={theme}>
            <SplashScreen />
        </ThemeProvider>
         
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});