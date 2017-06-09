import React from 'react';

import { Icon } from 'react-native-elements'; 
import { TabNavigator } from 'react-navigation';

import { FriendsStack } from './friends';
import Profile from '../screens/profile';

export const Home = TabNavigator({
  Friends: {
    screen: FriendsStack,
    navigationOptions: {
      tabBarLabel: 'Friends',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});
