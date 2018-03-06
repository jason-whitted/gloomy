import React, { Fragment } from 'react';

import { SYMBOL_CONFIG } from '../../constants';
import { Flyout } from '../Flyout';
import * as SYMBOL from './symbol';
import './styles.css';

const Noop = () => null;

export default ({ symbol: id, flyout, noText, ...props }) => {
  const Symbol = SYMBOL[id.id || id] || Noop;
  const symbol = <Symbol {...props} />;

  if (!SYMBOL_CONFIG[id.id || id]) {
    console.error(`Symbol ${id} not found.`);
    return null;
  }

  const name = SYMBOL_CONFIG[id.id || id].name;

  const content = (
    <Fragment>
      {symbol}
      {!noText && <i>{name}</i>}
    </Fragment>
  );

  return (
    <span className="d-inline-block">
      {!flyout && content}
      {flyout && (
        <Flyout text={content}>
          <table className="table table-sm table-dark m-0">
            <tbody>
              <tr>
                <td className="px-2">{name}</td>
              </tr>
            </tbody>
          </table>
        </Flyout>
      )}
    </span>
  );
};
