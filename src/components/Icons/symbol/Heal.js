import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-Heal', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 400)">
      <path
        className="bg"
        d="M187.77 195.925c-20.076 27.776-31.53 56.602-35.814 68.64-.654 1.84-3.257 1.84-3.913 0-4.282-12.038-15.737-40.864-35.812-68.64-26.26-36.33-39.568-53.957-39.568-84.532 0-42.713 34.625-77.339 77.337-77.339 42.713 0 77.338 34.626 77.338 77.34 0 30.574-13.308 48.2-39.568 84.531"
        fill="#231f20"
      />
    </g>
  </svg>
);
