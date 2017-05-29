import Relay from 'react-relay';

export default class LoginRoute extends Relay.Route {
  static routeName = 'Login';
  static queries = {
    viewer: (Component) => Relay.QL`
      query Viewer {
        viewer { ${Component.getFragment('viewer')} },
      }
    `,
  };
}
