const identity = a => a;

export default ({ key = 'store', map = identity } = {}) => store => next => action => {
  const result = next(action);
  sessionStorage.setItem(key, JSON.stringify(map(store.getState())));
  return result;
};
