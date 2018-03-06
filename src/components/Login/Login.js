import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import connectConfig from './connect';

class Login extends Component {
  login = () => {
    window.authManager.login();
  };

  logout = () => {
    window.authManager.logout();
  };

  render() {
    const { authenticated, user } = this.props;
    return (
      <div>
        {authenticated && (
          <div>
            {user && (
              <img src={user.avatar_url} className="rounded-circle mr-2" width="32" height="32" alt={user.login} />
            )}
            <div className="d-inline-block">
              {user && <span className="mr-2 text-light small">{user.login}</span>}
              <button className="btn btn-sm btn-outline-dark p-1" onClick={this.logout} title="Sign Out">
                <i className="fa fa-fw fa-sign-out" />
              </button>
            </div>
          </div>
        )}
        {!authenticated && (
          <button className="btn btn-success" onClick={this.login}>
            Login
          </button>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

Login.defaultProps = {
  user: undefined,
};

export default connect(...connectConfig)(Login);
