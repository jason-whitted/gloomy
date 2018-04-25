import React from 'react';
import { Link } from 'react-router-dom';
import { version } from '../../../package.json';
import './styles.css';

export default () => (
  <footer className="Footer small text-center text-muted">
    <div>
      Version {version} (<Link to="/patches">Patch Notes</Link>)
    </div>
    <div>
      Questions? Problems? Check out the FAQ on <a href="https://github.com/jason-whitted/gloomy">GitHub</a>.
    </div>
  </footer>
);
