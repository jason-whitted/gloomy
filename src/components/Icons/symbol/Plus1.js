import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-plus1', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 400)">
      <ellipse
        cx="150"
        cy="-150"
        transform="scale(1 -1)"
        rx="107.889"
        ry="107.889"
        fill="#1f1f1f"
        stroke="#fff"
        strokeWidth="9.285"
        strokeMiterlimit="10"
        paintOrder="stroke fill markers"
      />
      <path
        d="M124.755-174.636v23.37h23.537v4.007l-10.015 9.18h-13.522v13.69l-9.181 10.015h-4.006v-23.704H88.03v-3.673l10.015-9.515h13.522v-13.354l9.515-10.016z"
        paintOrder="stroke fill markers"
        transform="scale(.9933 -1.00675)"
        aria-label="+"
        fill="#fff"
        stroke="#000"
        strokeWidth="8.756"
      />
      <path
        d="M149.811-204.626q14.283-2.42 23.24-3.147 8.957-.847 10.894-.847 3.873 0 3.873 4.357V-92.54q0 2.905-2.905 3.39-2.057.362-4.478.604-2.3.363-4.479.484-2.179.243-3.994.243-1.816.12-2.784.12-2.905 0-2.905-3.025v-95.624q0-3.753-.363-6.173-.242-2.542-1.21-3.995-.848-1.452-2.422-1.936-1.573-.606-4.236-.606-1.453 0-3.39.121-1.815.121-4.115.363z"
        aria-label="1"
        paintOrder="markers stroke fill"
        transform="scale(.9933 -1.00675)"
        fill="#fff"
        stroke="#000"
        strokeWidth="9.197"
      />
    </g>;
  </svg>
);
