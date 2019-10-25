import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const AuthTabNavigator = createMaterialTopTabNavigator({
    RegisterScreen,
    LoginScreen
},
{
    tabBarComponent : null
})

export default AuthTabNavigator