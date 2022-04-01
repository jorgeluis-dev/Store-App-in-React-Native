import { StatusBar } from 'expo-status-bar'
import React, { Component, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native'
import KingYellow from '../../components/atoms/Text/KingYellow'
import { Container, CustomText, Logo } from '../../components/atoms'

export default function SplashScreen() {
  return (
    <Container align="center" justify="center">
      <KingYellow />

      <TextInput style={styles.input2} />
      <TextInput style={styles.input} placeholder="Qual o seu email?" />
      <TextInput style={styles.input} placeholder="Escreva sua Senha" />

      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          accessibilityLabel="Conectar"
          title="CONECTAR"
          color="#eea904"
          style={styles.buttonspace}
        />
      </View>

      <Text style={styles.textSimples}>esqueceu sua Senha?</Text>
      <StatusBar style="auto" />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
  input2: {
    paddingTop: 2,
  },
  textSimples: {
    fontSize: 10,
    fontFamily: 'Roboto',
    marginTop: 10,
    color: '#eea904',
    textTransform: 'uppercase',
  },
  alternativeLayoutButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonspace: {
    backgroundColor: '#eea904',
    marginRight: 60,
    marginLeft: 60,
    marginVertical: 100,
  },
  box: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    height: 80,
    padding: 10,
    alignContent: 'center',
    backgroundColor: '#115e54',
    justifyContent: 'space-between',
    borderTopColor: '#FFF',
    borderTopWidth: 1,
  },
})
