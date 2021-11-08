import qs from 'querystring';

import { api } from './common';
import { history, store } from './store';
import { getUser, userToken } from './store/user';

class AuthManager {
  constructor() {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      store.dispatch(userToken(access_token));
      store.dispatch(getUser());
    }
  }

  login = () => {
    const url = `https://github.com/login/oauth/authorize?${qs.stringify({
      client_id: process.env.REACT_APP_GITHUB_CLIENTID,
      scope: 'user:email read:user gist',
      state: (this.state = Math.random().toString()),
    })}`;
    const win = window.open(url);
    if (!win) alert('Authentication Popup blocked.');
  };

  handleAuthentication = ({ code, state }) => {
    if (state !== this.state) {
      return this.logout();
    }

    const request = {
      url: '/api/auth',
      method: 'POST',
      data: { code, state },
      headers: {},
    };

    const success = ({ access_token }) => {
      localStorage.setItem('access_token', access_token);
      store.dispatch(userToken(access_token));
      store.dispatch(getUser());
      history.replace('/');
    };

    const failure = error => {
      console.error(error);
      history.replace('/');
    };

    return api(request)
      .then(success)
      .catch(failure);
  };

  logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    return window.location.assign('/');
  };
}

window.authManager = new AuthManager();
