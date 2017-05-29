import Relay from 'react-relay';

export default class LoginMutation extends Relay.Mutation {
  //ok
  getMutation () {
    return Relay.QL`mutation { LoginEmail }`;
  }

  //ok
  getVariables () {
    return {
      email: this.props.email,
      password: this.props.password,
    };
  }
  //ok
  getFatQuery () {
    return Relay.QL`
      fragment on LoginEmailPayload {
          token,
          error
      }
    `;
  }
  //
  // getConfigs () {
  //   return [{
  //     type: 'REQUIRED_CHILDREN',
  //     fieldIDs: {
  //       viewer: this.props.viewer.token
  //     }
  //   }];
  // }

  getConfigs() {
      return [{
        type: 'REQUIRED_CHILDREN',
        // Forces these fragments to be included in the query
        children: [Relay.QL`
          fragment on LoginEmailPayload {
            token,
            error
          }
        `],
      }];
    }

  // static fragments = {
  //   // props have to contain user data with fragments key name 'user'
  //   viewer: () => Relay.QL`
  //     fragment on Viewer {
  //       token,
  //       error,
  //     }
  //   `
  // }
}