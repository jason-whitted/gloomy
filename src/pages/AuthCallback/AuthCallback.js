import React, { Component } from 'react';
import qs from 'querystring';

class AuthCallback extends Component {
  componentWillMount() {
    const { code, state } = qs.parse(window.location.search.slice(1));
    window.opener.authManager.handleAuthentication({ code, state }).then(() => window.close());
  }

  render() {
    return <div className="container p-5">Logging in..</div>;
  }
}

export default AuthCallback;
