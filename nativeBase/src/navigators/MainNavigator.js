import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import HomeStack from './HomeStack'
import ProfileTabNavigator from './ProfileTabNavigator'


const MainNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeStack,
        path : 'Home'
    },
    ProfileTabNavigator,
    SettingScreen
})

export default MainNavigator