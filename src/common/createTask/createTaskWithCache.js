import createTask from './createTask';

export default taskConfig => {
  let active = Promise.resolve();
  return ({ loading, skip } = {}) => fn => {
    if (skip) return Promise.resolve();
    if (loading) return active;
    active = createTask(taskConfig)(fn);
    return active;
  };
};
