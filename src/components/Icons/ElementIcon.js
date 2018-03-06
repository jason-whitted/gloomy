import React from 'react';

import { ELEMENT_CONFIG } from '../../constants';
import { Flyout } from '../Flyout';
import * as ELEMENT from './element';
import './styles.css';

const Noop = () => null;

export default ({ element: id, noFlyout, consume, ...props }) => {
  const Element = ELEMENT[id.id || id] || Noop;
  const element = <Element consume={consume} {...props} />;
  if (noFlyout) return element;

  return (
    <Flyout text={element}>
      <table className="table table-sm table-dark m-0">
        <tbody>
          <tr>
            <td className="px-2">
              {consume && 'Consume: '}
              {ELEMENT_CONFIG[id.id || id].name}
              {' element'}
            </td>
          </tr>
        </tbody>
      </table>
    </Flyout>
  );
};
