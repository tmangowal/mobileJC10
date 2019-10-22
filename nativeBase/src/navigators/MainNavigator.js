import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import HomeStack from './HomeStack'

const MainNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeStack,
        path : 'Home'
    },
    ProfileScreen,
    SettingScreen
})

export default MainNavigator