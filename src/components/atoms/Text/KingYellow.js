import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, Image  } from 'react-native';
import logoImage from '../../../../assets/logo.png';
import {Logo} from '../../../components/atoms';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={styles.container}>
      <FadeInView style={styles.fadeinview}>
        <Logo />
        <FadeInView style={styles.fadeinview}><Text style={styles.textSurpirse}>KINGYELLOW </Text></FadeInView>
        
      </FadeInView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 190,
        height: '30%',
        flexDirection: 'row',
        position: 'relative',
        alignContent: 'center',
        justifyContent: 'center',
    },
    fadeinview: {
        width: '100%',
        height: 100,
    },
    textSurpirse: {
        fontSize: 28,
        textAlign: 'center',
        margin: 2,
        color: '#eea904',
        fontWeight: 'bold',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
});
