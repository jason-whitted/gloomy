import React from 'react';
import classNames from 'classnames';

export default ({ className, xp, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-UseSlotGainXP', className)}
    {...props}
  >
    <g className="bg" transform="matrix(1.33333 0 0 -1.33333 0 400)" fill="#231f20">
      <path d="M131.983 67.915c-45.334 0-82.085 36.75-82.085 82.085 0 45.334 36.75 82.085 82.085 82.085 45.335 0 82.085-36.75 82.085-82.085 0-45.335-36.75-82.085-82.085-82.085m0 178.067C78.973 245.982 36 203.01 36 150s42.972-95.982 95.982-95.982S227.965 96.99 227.965 150s-42.972 95.982-95.982 95.982m106.865-126.577c-1.458-1.027-3.39.373-2.86 2.076a95.911 95.911 0 0 1 4.312 28.52 95.91 95.91 0 0 1-4.312 28.517c-.53 1.703 1.402 3.104 2.86 2.076l24.359-29.065a1.872 1.872 0 0 0 0-3.059z" />
      <path d="M131.983 217.286l17.925-24.013 29.653 4.305-4.305-29.653L199.269 150l-24.013-17.925 4.305-29.653-29.653 4.304-17.925-24.012-17.925 24.012-29.653-4.304 4.305 29.653L64.697 150l24.013 17.925-4.305 29.653 29.653-4.305z" />
    </g>
    {xp > 0 &&
      xp < 3 && (
        <text
          className="hl"
          textAnchor="middle"
          alignmentBaseline="central"
          x="44%"
          y="51%"
          fontFamily="Pirata One"
          fontSize="150"
        >
          {xp}
        </text>
      )}
  </svg>
);
