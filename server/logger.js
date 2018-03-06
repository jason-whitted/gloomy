module.exports = (req, res, next) => {
  console.log('API:', req.method, req.path); // eslint-disable-line no-console
  next();
};
