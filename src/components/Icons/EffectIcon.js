import React from 'react';

import { EFFECT_CONFIG } from '../../constants';
import { Flyout } from '../Flyout';
import * as EFFECT from './effect';
import './styles.css';

const Noop = () => null;

export default ({ effect: id, noFlyout, ...props }) => {
  const Effect = EFFECT[id.id || id] || Noop;
  const effect = <Effect {...props} />;
  if (noFlyout) return effect;

  return (
    <Flyout text={effect}>
      <table className="table table-sm table-dark m-0">
        <tbody>
          <tr>
            <td className="px-2">{EFFECT_CONFIG[id.id || id].name}</td>
          </tr>
        </tbody>
      </table>
    </Flyout>
  );
};
