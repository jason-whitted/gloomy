import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-EventRemoveFromGame', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 400)" fill="#231f20">
      <path
        className="bg"
        d="M139.056 95.254l16.366 37.749-27.735 29.77 13.232 30.278-33.453 7.884-2.415 18.168-72.373-29.255c-5.211-2.106-7.728-8.038-5.622-13.25L75.255 57.357c2.107-5.212 8.039-7.73 13.25-5.623l71.353 29.107.144 6.616z"
      />
      <path
        className="bg"
        d="M266.969 110.558c5.417 1.503 8.59 7.11 7.087 12.528L239.672 247.02c-1.503 5.416-7.112 8.589-12.528 7.086l-66.01-18.313-11.82-20.605 15.267-24.172-17.81-25.7 22.9-32.568-22.9-34.095 13.087-17.812z"
      />
    </g>
  </svg>
);
