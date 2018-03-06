import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className={classNames('svg svg-effect svg-effect-invisible', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M300 15.652a14.588 14.588 0 0 0-10.382 4.3L19.952 289.618c-5.723 5.724-5.723 15.04 0 20.763l269.666 269.667a14.59 14.59 0 0 0 10.382 4.3 14.59 14.59 0 0 0 10.382-4.3l269.666-269.667c5.723-5.724 5.723-15.039 0-20.763L310.382 19.952a14.588 14.588 0 0 0-10.382-4.3"
        fill="#191715"
      />
      <path
        d="M300 589.347a19.618 19.618 0 0 1-13.917-5.765L16.417 313.916c-7.687-7.686-7.687-20.147 0-27.834L286.083 16.416A19.625 19.625 0 0 1 300 10.652a19.625 19.625 0 0 1 13.917 5.764l269.666 269.666c7.687 7.687 7.687 20.148 0 27.834L313.917 583.583A19.618 19.618 0 0 1 300 589.346m0-10a9.621 9.621 0 0 0 6.846-2.835l269.667-269.666a9.62 9.62 0 0 0 2.835-6.847 9.619 9.619 0 0 0-2.835-6.845L306.846 23.488A9.618 9.618 0 0 0 300 20.652a9.618 9.618 0 0 0-6.846 2.836L23.487 293.154A9.619 9.619 0 0 0 20.652 300a9.62 9.62 0 0 0 2.835 6.846l269.667 269.667a9.621 9.621 0 0 0 6.846 2.835"
        fill="#fff"
      />
      <path
        d="M342.44 433.68c0-23.438-19.001-42.438-42.44-42.438-23.439 0-42.44 19-42.44 42.438 0 23.439 19.001 42.439 42.44 42.439 23.438 0 42.44-19 42.44-42.44"
        fill="#191715"
      />
      <path
        d="M342.44 433.68c0-23.438-19.001-42.438-42.44-42.438-23.439 0-42.44 19-42.44 42.438 0 23.439 19.001 42.439 42.44 42.439 23.438 0 42.44-19 42.44-42.44z"
        fill="none"
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeDasharray="14.81,29.62"
      />
      <path
        d="M240.404 165.482L290.5 357.444h19l50.095-191.962s-16.08-12.102-53.454-12.102c-37.372 0-65.737 12.102-65.737 12.102"
        fill="#191715"
      />
      <path
        d="M247.441 162.901c-4.52 1.508-7.037 2.581-7.037 2.581l1.893 7.257"
        fill="none"
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M250.718 205.003l33.679 129.053"
        fill="none"
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="16.672,33.344"
      />
      <path
        d="M288.606 350.187l1.894 7.257h7.5m4 0h7.5l1.894-7.257"
        fill="none"
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M319.813 317.924l33.68-129.053"
        fill="none"
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="16.672,33.344"
      />
      <path
        d="M357.702 172.74l1.894-7.258s-2.106-1.584-6.563-3.606"
        fill="none"
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M327.151 154.79c-6.073-.861-13.06-1.41-21.01-1.41-18.104 0-34.095 2.84-45.77 5.769"
        fill="none"
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="13.461,26.922"
      />
    </g>
  </svg>
);
