import React from 'react';
import classNames from 'classnames';

import { Convert } from '../../../common';

const REPUTATION = [-19, -15, -11, -7, -3, 0, 3, 7, 11, 15, 19];

export default props => {
  const { party } = props;

  const shopPriceModifierClassName = i =>
    classNames({
      'border bg-success': i >= 5 && (i - 5) * -1 === party.shopPriceModifier,
      'border bg-danger': i < 5 && (i - 5) * -1 === party.shopPriceModifier,
    });
  const reputationClassName = i =>
    classNames({
      'border bg-success': i >= 5 && (i - 5) * -1 === Convert.reputationToShopPriceModifier(party.reputation),
      'border bg-danger': i < 5 && (i - 5) * -1 === Convert.reputationToShopPriceModifier(party.reputation),
    });

  return (
    <table className="table table-sm table-striped table-dark m-0 small text-center">
      <tbody>
        <tr>
          <th>Price</th>
          {REPUTATION.map((reputation, i) => (
            <td key={reputation} className={shopPriceModifierClassName(i)}>
              {(i - 5) * -1}
            </td>
          ))}
        </tr>
        <tr>
          <th>Rep</th>
          {REPUTATION.map((reputation, i) => (
            <td key={reputation} className={reputationClassName(i)}>
              {reputation}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
