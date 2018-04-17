import React, { Fragment } from 'react';

import { Flyout } from '../Flyout';
import { Attack } from './attack';
import SymbolIcon from './SymbolIcon';

export default ({ noFlyout, attack, ...other }) => {
  const icon = <Attack attack={attack} {...other} />;

  if (noFlyout) return icon;

  return (
    <Flyout text={icon}>
      <table className="table table-sm table-dark m-0">
        <tbody>
          <tr>
            <td className="px-2">
              {attack === 'null' && <i>Null</i>}
              {attack !== 'null' && (
                <Fragment>
                  Attack <SymbolIcon symbol="Attack" className="light" noText /> {attack}
                </Fragment>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </Flyout>
  );
};
