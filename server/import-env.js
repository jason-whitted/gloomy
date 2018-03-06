const fs = require('fs');
const path = require('path');

const ENV_PATH = path.join(__dirname, '..', '.env');

if (fs.existsSync(ENV_PATH)) {
  try {
    // Read the .env file
    // Split it into key-value pairs
    // Add them to process.env (if they don't already exist)
    fs
      .readFileSync(ENV_PATH, 'utf8')
      .toString()
      .split('\n')
      .map(s => s.trim())
      .filter(s => !!s)
      .map(s => s.split('='))
      .filter(a => a.length > 1 && !process.env.hasOwnProperty(a[0]))
      .forEach(([k, ...v]) => {
        process.env[k] = v.join('=');
      });
  } catch (e) {
    console.log('Error importing env.', e);
  }
}
