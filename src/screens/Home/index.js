import { Container} from '../../components/atoms/Container';
import { HomeList } from '../../components/organisms/HomeList';
import { StatusBar } from 'expo-status-bar'
import React from 'react'


export default function Home() {
  return (
    <Container align="center" justify="center">
      <HomeList align="center" justify="center"/>

    </Container>
  )
}

