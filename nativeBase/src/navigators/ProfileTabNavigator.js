import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import ProfileScreen from '../screens/ProfileScreen'
import Stack1Screen from '../screens/Stack1Screen'
import Stack2Screen from '../screens/Stack2Screen'

const ProfileTabNavigator = createMaterialTopTabNavigator({
    Stack1Screen,
    ProfileScreen,
    Stack2Screen
},
{
    swipeEnabled : true,
    initialRouteName : 'ProfileScreen'
})

export default ProfileTabNavigator