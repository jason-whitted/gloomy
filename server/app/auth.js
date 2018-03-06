const fetch = require('node-fetch');

module.exports = app =>
  app.post('/api/auth', (req, res) => {
    const { code, state } = req.body;

    const body = JSON.stringify({
      client_id: process.env.REACT_APP_GITHUB_CLIENTID,
      client_secret: process.env.GITHUB_SECRET,
      code,
      state,
    });

    fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(r => r.json())
      .then(({ access_token }) => res.json({ sucess: true, access_token }))
      .catch(error => res.json({ success: false, error }));
  });
