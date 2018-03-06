import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-Checkmark', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 400)">
      <path
        className="bg"
        d="M264.404 243.685c-5.457 8.575-22.403 13.197-38.063 10.15-7.527-10.404-55.826-95.581-84.375-144.507-30.454 21.63-59.364 42.93-59.965 43.304-20.218-.797-33.758-7.354-46.405-20.121 7.474-5.896 75.552-58.368 112.08-87.285 22.416 37.325 113.148 192.978 116.728 198.459"
        fill="#100f0d"
      />
    </g>
  </svg>
);
