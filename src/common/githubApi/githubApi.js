import qs from 'querystring';

import { api } from '../api';

import { store } from '../../store';
import { selectUser, selectUserToken } from '../../store/user';

const regLogin = /\{login\}/g;

export default ({ url, query, method, data, ...other }) =>
  new Promise(resolve => {
    const { login } = selectUser(store.getState()) || {};
    if (regLogin.test(url) && !login) {
      throw new Error('Not logged in');
    }

    return resolve(
      api({
        url: `https://api.github.com${url.replace(regLogin, login)}?${qs.stringify({
          access_token: selectUserToken(store.getState()),
          ...query,
        })}`,
        method,
        data,
        ...other,
      }),
    );
  });
