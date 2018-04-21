import React from 'react';
import classNames from 'classnames';

import { Convert } from '../../../common';

const PROSPERITY = [0, 4, 9, 15, 22, 30, 39, 49, 64];

export default props => {
  const { campaign } = props;

  const levelClassName = i => classNames({ 'border bg-success': i + 1 === campaign.prosperityLevel });
  const prosperityClassName = i =>
    classNames({
      'border bg-success': i + 1 === Convert.prosperityToProsperityLevel(campaign.prosperity),
    });

  return (
    <table className="table table-sm table-striped table-dark m-0 small text-center">
      <tbody>
        <tr>
          <th>Level</th>
          {PROSPERITY.map((val, i) => (
            <td key={val} className={levelClassName(i)}>
              {i + 1}
            </td>
          ))}
        </tr>
        <tr>
          <th>Prosperity</th>
          {PROSPERITY.map((val, i) => (
            <td key={val} className={prosperityClassName(i)}>
              {val}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
