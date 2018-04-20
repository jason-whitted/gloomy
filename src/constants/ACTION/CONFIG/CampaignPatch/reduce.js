const navigate = (input, path) => {
  let object = { ...input };

  let location = object;
  let key = path.shift();

  while (path.length) {
    location[key] = { ...location[key] };
    location = location[key];
    key = path.shift();
  }

  return { object, location, key };
};

const isNotObject = o => o instanceof Array || typeof o !== 'object';
const merge = (data, into) =>
  Object.entries(data).reduce(
    (obj, [key, val]) => ({
      ...obj,
      [key]: isNotObject(into[key]) ? val : merge(val, into[key]),
    }),
    into,
  );

export default (campaign, { payload: { updates } }) =>
  updates.reduce((obj, { type, path, value }) => {
    const paths = typeof path === 'string' ? path.split(/[.[\]]/).filter(v => v) : path;
    switch (type) {
      case 'update':
      case 'delete':
      case 'set': {
        if (!paths.length) return obj;
        const { object, location, key } = navigate(obj, paths);
        location[key] = type === 'delete' ? undefined : value;
        return object;
      }
      case 'merge': {
        if (!paths || !paths.length) return merge(value, obj);
        const { object, location, key } = navigate(obj, paths);
        location[key] = merge(value, location[key]);
        return object;
      }
      default:
        return campaign;
    }
  }, campaign);
