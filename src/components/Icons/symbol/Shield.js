import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-Shield', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 400)">
      <path
        className="bg"
        d="M260.274 241.692a3.723 3.723 0 0 1-2.609 4.487c-27.946 7.85-88.19 9.827-107.665 19.404-19.474-9.577-79.719-11.555-107.665-19.404a3.723 3.723 0 0 1-2.609-4.487c14.51-57.853-13.349-87.76-6.732-129.802C40.497 64.213 125.537 56.852 150 34.416c24.462 22.436 109.503 29.797 117.006 77.474 6.617 42.042-21.242 71.95-6.732 129.802"
        fill="#231f20"
      />
    </g>
  </svg>
);
