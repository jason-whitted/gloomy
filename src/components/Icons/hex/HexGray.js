import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <g className={classNames('svg svg-hex', className)} {...props}>
    <path d="M360.583 292.714L200 385.426 39.417 292.714V107.287l160.582-92.712 160.584 92.712z" fill="#f5f5f5" />
    <g transform="matrix(1.33333 0 0 -1.33333 0 400)">
      <path
        className="bg-stroke"
        d="M270.438 80.465L150 10.93 29.563 80.465v139.07L150 289.069l120.438-69.534z"
        fill="none"
        stroke="#231f20"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </g>
    <path d="M327.49 273.607L200 347.212 72.51 273.607V126.393L200 52.787l127.49 73.606z" fill="#535456" />
  </g>
);
