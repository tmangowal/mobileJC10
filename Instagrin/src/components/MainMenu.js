import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './Home';
import ProfileDrawer from './ProfileDrawer';
import PostPhoto from './PostPhoto';
import ExploreStack from './ExploreStack';

export default createAppContainer(createBottomTabNavigator(
  {
    Home: Home,
    Explore: ExploreStack,
    PostPhoto: PostPhoto,
    Profile: ({ screenProps }) => <ProfileDrawer screenProps={{ rootStackNavigator: screenProps.rootStackNavigator}} />,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if(routeName === 'PostPhoto') {
            iconName = `add-box`;
        } else if (routeName === 'Profile') {
          iconName = `account-box`;
        } else if (routeName === 'Explore') {
          iconName = 'search'
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4388d6',
      inactiveTintColor: 'gray',
      showLabel: false
    },
  }
));