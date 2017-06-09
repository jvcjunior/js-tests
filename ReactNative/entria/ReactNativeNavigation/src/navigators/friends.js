import React from 'react';

import { StackNavigator } from 'react-navigation';

import Friend from '../screens/friend';
import Friends from '../screens/friends';

export const FriendsStack = StackNavigator({
  Friends: {
    screen: Friends,
    navigationOptions: {
      title: 'Friends',
    },
  },
  Friend: {
    screen: Friend,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});