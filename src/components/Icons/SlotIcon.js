import React from 'react';

import { SLOT_CONFIG } from '../../constants';
import { Flyout } from '../Flyout';
import * as SLOT from './slot';
import './styles.css';

const Noop = () => null;

export default ({ slot: id, flyout, text, ...props }) => {
  const Slot = SLOT[`Slot${id.id || id}`] || Noop;
  const slot = <Slot {...props} />;
  if (!flyout && !text) return slot;

  const name = SLOT_CONFIG[id.id || id].name;

  const content = (
    <span className="d-inline-block">
      {slot}
      {text && <i>{name}</i>}
    </span>
  );

  if (!flyout) return content;

  return (
    <Flyout text={content}>
      <table className="table table-sm table-dark m-0">
        <tbody>
          <tr>
            <td className="px-2">{name}</td>
          </tr>
        </tbody>
      </table>
    </Flyout>
  );
};
