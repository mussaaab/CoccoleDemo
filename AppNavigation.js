import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { RegisterOrLoginScreen, Register, SelectDateOfBirth } from './src/Screens'

const AuthStack = createStackNavigator();

const Auth = () => {
    return (
        <AuthStack.Navigator initialRouteName="RegisterOrLogin">
            <AuthStack.Screen name="RegisterOrLogin" component={RegisterOrLoginScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <AuthStack.Screen name="SelectDateOfBirth" component={SelectDateOfBirth} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    )
}


class AppNavigation extends Component {
    render() {
        return (
            <Auth />
        )
    }
}

export default AppNavigation
