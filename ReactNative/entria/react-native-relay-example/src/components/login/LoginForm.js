import React, { Component } from 'react';
import Relay from 'react-relay';
import { Card, CardSection, Button, Input} from '../common';
import LoginMutation from '../../mutations/LoginMutation';

class LoginForm extends Component {
  state = { email: '', password: '' };  

  onButtonPress() {
    // const self = this;
    // debugger
    // Relay.Store.commitUpdate(
    //   new LoginMutation({
    //     email: this.state.email,
    //     password: this.state.password
    //   }),
    //   {
    //     onFailure: (transaction) => {
    //       console.log('Erro ao logar');
    //     },
    //     onSuccess: (response) => {
    //       console.log('Login efetuado com sucesso');
    //     }
    //   }
    // );
    let onFailure = (transaction) => {
      debugger
      //var error = transaction.getError() || new Error('Mutation failed.');
      //console.error(error);
    };

    let onSuccess = (response) => {
      debugger
      //const access_token = response.signin.access_token;
      //localStorage.setItem('access_token', access_token);
      //window.location = '/';
    }

    Relay.Store.commitUpdate(new LoginMutation({
         email: this.state.email,
         password: this.state.password
    }), {onFailure, onSuccess});
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

// LoginForm = Relay.createContainer(LoginForm, {
//   fragments: {
//     viewer: () => Relay.QL`
//       fragment on Viewer {
//         token,
//         error
//       }
//     `,
//   }
// });

export default LoginForm;