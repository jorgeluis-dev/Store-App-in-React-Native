import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import logoImage from '../../assets/logo.png';



export default function SplashScreen(){
    return (
        <View style={styles.container}>
        <Image source={logoImage} style={styles.logo}/>
        <Text style={styles.title}>KingYellow</Text>
        <TextInput style={styles.input} placeholder="Qual o seu email?"/>
        <TextInput style={styles.input} placeholder="Escreva sua Senha"/>
        <Text style={styles.textSimples}>esqueceu sua Senha?</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14213d',

    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto',
        marginTop: 10,
        fontWeight: 'bold',
        color: '#eea904',
        textTransform: 'uppercase',
    },
    input: {
        height: 43,
        width: 290,
        alignSelf: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4D96FF',
        borderRadius: 2,
        marginTop: 15,
        paddingHorizontal: 15,
    },
    textSimples: {
        fontSize: 10,
        type: 'password',
        fontFamily: 'Roboto',
        marginTop: 10,
        color: '#eea904',
        textTransform: 'uppercase',
    }
});