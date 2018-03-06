import { selectUser, selectUserToken } from '../../store/user';

const select = state => ({
  authenticated: !!selectUserToken(state),
  user: selectUser(state),
});

const boundActions = {};

export default [select, boundActions];
