import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Relay from 'react-relay';
import ViewerQuery from './ViewerQuery';
import { createRenderer } from './RelayUtils';
import RelayStore from './RelayStore';

//teste
import Home from './components/home/Home';
import Login from './components/login/Login';

RelayStore.reset(
  new Relay.DefaultNetworkLayer('http://localhost:5000/graphql')
);

class RelayApp extends Component {
  teste() {
    if(this.props.viewer.users) {
      console.log(this.props.viewer.users.edges);
      return this.props.viewer.users.edges.map(item => <Text>{item.node.name}</Text>);
    }
    return <Text>Loading...</Text>;
  }

  render() {
    return (
      <View style={styles.center}>
        {this.teste()}
      </View>
    );
  }
}

// Create a Relay.Renderer container
export default createRenderer(RelayApp, {
  queries: ViewerQuery,
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        users(first: 10) {
          edges {
            node {
              name
            }
          }
        }
      }
    `,
  },
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
