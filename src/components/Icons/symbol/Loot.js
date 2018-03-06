import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-Loot', className)}
    {...props}
  >
    <g className="bg" transform="matrix(1.33333 0 0 -1.33333 0 400)" fill="#231f20">
      <path d="M264 65.6v-2.54c0-28.72-51.04-52-114-52s-114 23.28-114 52c0 .24.01.48.02.72v1.79c6.65-7.83 16.5-14.83 29.22-20.63 22.81-10.4 52.91-16.13 84.76-16.13 31.85 0 61.95 5.73 84.76 16.13C247.5 50.75 257.35 57.76 264 65.6" />
      <path d="M264 90.81c0-28.72-51.04-52-114-52s-114 23.28-114 52c0 21.69 29.12 40.28 70.5 48.07V80.81h87v58.07c41.38-7.79 70.5-26.38 70.5-48.07" />
      <path d="M226.29 156.82H183.5V90.81h-67v66.01H73.71L150 288.94z" />
    </g>
  </svg>
);
