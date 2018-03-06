const files = ['./auth'];

module.exports = app => {
  files.forEach(file => require(file)(app));

  app.all('/api/*', (req, res) =>
    res
      .status(500)
      .set('Content-Type', 'application/json')
      .send({ success: false, error: 'Invalid Request' }),
  );
};
