import React from 'react';
import classNames from 'classnames';

import { ClassAbility } from '../../Common';

const Command = props => {
  const { action: { class: $class, className, style } } = props;
  const classes = classNames('action action-command', className);

  return (
    <div className={classes} style={style}>
      <ClassAbility class={$class} text="Command" />
    </div>
  );
};

export default Command;
