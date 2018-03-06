import React from 'react';
import classNames from 'classnames';

const faClasses = checked =>
  classNames({
    fa: true,
    'fa-fw': true,
    'fa-check-square-o': checked,
    'fa-square-o': !checked,
    'text-muted': !checked,
  });

const endOfLine = n => !!n && n % 9 === 8;
const endOfGroup = n => !!n && n % 3 === 2 && !endOfLine(n);

export default ({ count }) => (
  <div>
    {new Array(18).fill(0).map((o, n) => (
      <span key={n}>
        <i className={faClasses(n < count)} />
        {endOfGroup(n) && <i className="fa fa-fw" style={{ visible: false }} />}
        {endOfLine(n) && <br />}
      </span>
    ))}
  </div>
);
