import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import react from 'react';
import SplashScreen from './src/SplashScreen/login'
import { CustomText } from './src/components/atoms/CustomText';
import AppLoading from 'expo-app-loading';
import { 
    useFonts, 
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
   } from '@expo-google-fonts/source-sans-pro';

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  return (
    <SplashScreen />
    
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
