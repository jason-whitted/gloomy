const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

if (PRODUCTION) {
  app.use(express.static(path.join(__dirname, '..', 'build')));
} else {
  require('./import-env');
  app.use(require('./logger'));
}

app.set('PORT', PORT);

require('./app')(app);

// All other files get treated as the SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

process.on('SIGIN', () => {
  // NOTE: Close any connections here
});
