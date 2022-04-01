import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home} from '../screens/Home/index'
import {SplashScreen} from '../screens/SplashScreen/index'


    export default function Routes() {
        const Stack = createStackNavigator()
        return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
            </NavigationContainer>
        )
      }