import React from 'react';
import classNames from 'classnames';

export default ({ class: $class, className, classColor, invert, circle, ...props }) => {
  const hl = classColor ? $class.color : 'black';
  const bg = 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 550"
      className={classNames('svg svg-class svg-class-CH', className)}
      {...props}
    >
      {circle && <circle cx="275" cy="275" r="275" fill={invert ? hl : bg} />}
      <path
        fill={invert ? bg : hl}
        d="M315.766 253.016l127.366 98.942 70.172-78.726L391.146 96.918zM280.087 9.222L147.046 178.134l122.934 83.987 71.614-174.776zM36.696 276.767l122.158 176.33 75.352-156.02-127.367-98.954zm168.67 185.915l61.506 78.096L399.823 371.92l-122.895-83.96z"
      />
    </svg>
  );
};
