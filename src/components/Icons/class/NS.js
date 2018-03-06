import React from 'react';
import classNames from 'classnames';

export default ({ class: $class, className, classColor, invert, circle, ...props }) => {
  const hl = classColor ? $class.color : 'black';
  const bg = 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 550"
      className={classNames('svg svg-class svg-class-NS', className)}
      {...props}
    >
      {circle && <circle cx="275" cy="275" r="275" fill={invert ? hl : bg} />}
      <g fill={invert ? bg : hl} transform="matrix(1.33333 0 0 -1.33333 -133 803)">
        <path d="M349.653 395.521c0-67.348-54.597-121.95-121.95-121.95-67.35 0-121.95 54.602-121.95 121.95 0 67.346 54.6 121.947 121.95 121.947 67.353 0 121.95-54.601 121.95-121.947" />
        <path d="M310.643 590.636c-49.443 0-94.564-18.425-128.941-48.738 23.255 12.425 49.81 19.489 78.009 19.489 91.609 0 165.87-74.261 165.87-165.87 0-91.6-74.261-165.861-165.87-165.861-28.2 0-54.754 7.064-78.01 19.489 34.378-30.317 79.499-48.738 128.942-48.738 107.759 0 195.117 87.35 195.117 195.11 0 107.76-87.358 195.119-195.117 195.119" />
      </g>
    </svg>
  );
};
