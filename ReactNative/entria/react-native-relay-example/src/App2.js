import React, { Component } from 'react';
import Relay from 'react-relay';
import { View } from 'react-native';
import { createRenderer } from './RelayUtils';
import RelayStore from './RelayStore';


import { Header } from './components/common'
import LoginForm from './components/login/LoginForm';
import LoginRoute from './components/login/LoginRoute';

RelayStore.reset(
  new Relay.DefaultNetworkLayer('http://localhost:5000/graphql', {
  credentials: 'same-origin'
  })
);

class App2 extends Component {
  render() {
    return (
      <View>
        <Header headerText="Login"/>
        <LoginForm />
        {/*<Relay.RootContainer
          Component={LoginForm}
          route={new LoginRoute()}
        />*/}
      </View>
    )
  } 
}


export default App2;