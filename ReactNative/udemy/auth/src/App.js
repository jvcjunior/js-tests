import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common'
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount(){
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAFyux9Cd_vmuAgMOBOrjUKVUVVw3NXgqk',
      authDomain: 'auth-react-native-e6e0d.firebaseapp.com',
      databaseURL: 'https://auth-react-native-e6e0d.firebaseio.com',
      projectId: 'auth-react-native-e6e0d',
      storageBucket: 'auth-react-native-e6e0d.appspot.com',
      messagingSenderId: '122875883421'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    )
  }

}

export default App;