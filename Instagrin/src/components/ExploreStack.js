import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Explore from './Explore';
import PostDetailExplore from './PostDetailExplore';

export default createStackNavigator(
    {
        Explore: {
            screen: Explore
        },
        PostDetailExplore: {
            screen: PostDetailExplore
        }
    },
    {
        initialRouteName: 'Explore',
        headerMode: 'none'
    }
);
