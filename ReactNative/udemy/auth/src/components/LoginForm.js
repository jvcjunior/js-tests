import React, { Component } from 'react';
import  { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input} from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error:'' };  

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: ''})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        debugger
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            debugger
            this.setState({error: 'Authentication failed.'})
          })
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.erroTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  erroTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;