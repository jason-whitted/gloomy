import React, { Fragment } from 'react';
import { Field } from 'redux-form';

import { CLASS_CONFIG, RACE_CONFIG } from '../../../../constants';
import { ClassIcon } from '../../../../components/Icons';

export default ({ id, error, showText }) => {
  const icon = <ClassIcon class={id} />;
  const $class = CLASS_CONFIG[id];

  // prettier-ignore
  const name = !showText ? icon : (
    <Fragment>
      {icon} {RACE_CONFIG[$class.race].name} {$class.name}
    </Fragment>
  );

  const unlockedName = `classes[${id}].unlocked`;
  const soloCompleteName = `classes[${id}].soloComplete`;

  return (
    <tr className={error ? 'table-danger' : ''}>
      <td>
        <label htmlFor={unlockedName}>{name}</label>
      </td>
      <td className="text-center">
        <Field id={unlockedName} name={unlockedName} component="input" type="checkbox" disabled={$class.starter} />
      </td>
      <td className="text-center">
        <Field name={soloCompleteName} component="input" type="checkbox" />
      </td>
    </tr>
  );
};
