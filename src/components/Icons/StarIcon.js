import React from 'react';

import { Flyout } from '../Flyout';

export default ({ title, ...props }) => {
  const icon = (
    <span role="img" aria-label="Starred" {...props}>
      ⭐
    </span>
  );

  // prettier-ignore
  return !title ? icon : (
    <Flyout text={icon}>
      <table className="table table-sm table-dark m-0">
        <tbody>
          <tr>
            <td className="px-2">{title}</td>
          </tr>
        </tbody>
      </table>
    </Flyout>
  );
};
