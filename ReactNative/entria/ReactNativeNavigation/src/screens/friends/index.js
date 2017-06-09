import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Friends extends Component {
  
  state = {
    users: [],
    loaded: false,
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          users: responseData.results,
          loaded: true,
        });
      })
      .done();
  }


  onLearnMore = (user) => {
    this.props.navigation.navigate('Friend', { ...user });
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return this.renderUsersList();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Users...
        </Text>
      </View>
    );
  }

  renderUsersList() {
    return (
      <ScrollView>
        <List>
          {this.state.users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


export default Friends;