import React from 'react';
import classNames from 'classnames';

export default ({ class: $class, className, classColor, invert, circle, ...props }) => {
  const hl = classColor ? $class.color : 'black';
  const bg = 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 550"
      className={classNames('svg svg-class svg-class-BE', className)}
      {...props}
    >
      {circle && <circle cx="275" cy="275" r="275" fill={invert ? hl : bg} />}
      <g fill={invert ? bg : hl}>
        <g transform="matrix(1.33333 0 0 -1.33333 -133 803)">
          <path d="M426.586 363.437l79.594 32.248-79.594 32.258 52.808 67.718-85.055-11.867 11.864 85.057-67.726-52.8-32.248 79.584-32.257-79.583-67.719 52.799 11.865-85.057-85.055 11.867 52.8-67.718-79.586-32.258 79.585-32.248-52.799-67.727 85.055 11.873-11.865-85.056 67.72 52.808 32.256-79.591 32.248 79.59 67.726-52.807-11.864 85.056 85.055-11.873zM306.23 296.835c-54.593 0-98.85 44.258-98.85 98.85 0 54.593 44.257 98.859 98.85 98.859 54.592 0 98.85-44.266 98.85-98.86 0-54.591-44.258-98.85-98.85-98.85" />
        </g>
        <g transform="matrix(1.33333 0 0 -1.33333 -133 803)">
          <path d="M368.365 395.685c0-34.32-27.816-62.137-62.137-62.137-34.32 0-62.145 27.817-62.145 62.137 0 34.329 27.825 62.146 62.145 62.146 34.322 0 62.137-27.817 62.137-62.146" />
        </g>
      </g>
    </svg>
  );
};
