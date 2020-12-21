import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { RegisterOrLoginScreen, Register, SelectDateOfBirth, SplashLoading } from './src/Screens'

const AuthStack = createStackNavigator();



const Auth = () => {
    return (
        <AuthStack.Navigator initialRouteName="SplashLoading">
            <AuthStack.Screen name="SplashLoading" component={SplashLoading} options={{ headerShown: false }} />
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
