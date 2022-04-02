import { Container} from '../../components/atoms/Container';
import { HomeList } from '../../components/organisms/HomeList';
import { StatusBar } from 'expo-status-bar'
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import React from 'react'

export const Home = () => {
    return (
        <Container align="center" justify="center">
            <StatusBar style="auto" />
            <TouchableOpacity onPress={() => alert('TESTE')}>
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <HomeList style={{ width: 5, height: 5}}  align="center" justify="center"/>
            
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 20,      
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        color: '#eea904',
        backgroundColor: '#000',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    
  });







