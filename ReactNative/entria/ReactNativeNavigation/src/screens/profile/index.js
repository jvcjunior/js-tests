import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';

class Profile extends Component {

  state = {
    profile: {},
    loaded: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          profile: responseData.results[0],
          loaded: true
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return this.renderProfile();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Profile...
        </Text>
      </View>
    );
  }

  renderProfile() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.state.profile.picture.large }}
          featured
          title={`${this.state.profile.name.first.toUpperCase()} ${this.state.profile.name.last.toUpperCase()}`}
          caption={this.state.profile.email}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={this.state.profile.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.state.profile.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.state.profile.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.state.profile.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.state.profile.location.city}
            hideChevron
          />
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

export default Profile;