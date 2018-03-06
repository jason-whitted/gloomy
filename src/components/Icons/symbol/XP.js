import React from 'react';
import classNames from 'classnames';

export default ({ className, xp, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-XP', className)}
    {...props}
  >
    <path
      className="bg"
      d="M200 40l42.623 57.099 70.514-10.236-10.236 70.514L360 200l-57.099 42.623 10.236 70.514-70.514-10.236L200 360l-42.623-57.099-70.514 10.236 10.236-70.514L40 200l57.099-42.623-10.236-70.514 70.514 10.236z"
      fill="#231f20"
    />
    {xp > 0 &&
      xp <= 4 && (
        <text
          className="hl"
          textAnchor="middle"
          alignmentBaseline="central"
          x="49%"
          y="50%"
          fontFamily="Pirata One"
          fontSize="225"
        >
          {xp}
        </text>
      )}
  </svg>
);
