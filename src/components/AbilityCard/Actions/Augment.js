import React from 'react';
import classNames from 'classnames';

import { ClassAbility } from '../../Common';

const Augment = props => {
  const { action: { class: $class, condition, className, style }, children } = props;
  const classes = classNames('action action-augment', className);

  return (
    <div className={classes} style={style}>
      <ClassAbility class={$class} text="Augment" />
      <div className="bg-dark d-flex align-items-center">
        <div className="small px-2 py-1">{condition}</div>
        <div className="augment-actions px-2">{children}</div>
      </div>
    </div>
  );
};

export default Augment;
