import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import react from 'react';
import SplashScreen from './src/SplashScreen/login'
import { CustomText } from './src/components/atoms/CustomText';

export default function App() {
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
