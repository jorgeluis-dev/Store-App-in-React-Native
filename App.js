import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import react from 'react';
// import SplashScreen from './src/screens/SplashScreen/login'
// import { Home } from './src/screens/Home/index'
import { SplashScreen} from './src/screens'
import AppLoading from 'expo-app-loading';
import { ThemeProvider} from 'styled-components'
import { 
    useFonts, 
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
   } from '@expo-google-fonts/source-sans-pro';
import { theme } from './src/styles'

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
