import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { UnexpectedError } from '../../components/UnexpectedError';
import { Login } from '../../components/Login';
import { MessageQueue } from '../../components/MessageQueue';
import { Footer } from '../../components/Footer';
import Routes from '../Routes.js';
import logo from './logo.svg';
import './styles.css';

class App extends Component {
  state = { error: undefined, info: undefined };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="25" className="d-inline-block align-middle mr-2" alt="Gloomy Logo" />
            Gloomy
          </Link>
          <div className="form-inline my-2 my-lg-0">
            <Login />
          </div>
        </nav>
        <div className="container mt-2">
          {error && (
            <div className="row">
              <div className="col-12 col-md-6">
                <UnexpectedError />
              </div>
            </div>
          )}
          {!error && (
            <div className="row">
              <MessageQueue />
              <Routes />
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
