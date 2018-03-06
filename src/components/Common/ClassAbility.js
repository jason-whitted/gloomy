import React from 'react';

import { CLASS_CONFIG } from '../../constants';
import { ClassIcon } from '../Icons';

export default ({ class: id, text }) => {
  const $class = CLASS_CONFIG[id.id || id];

  return (
    <span className="class-ability" style={{ color: $class.color }}>
      {text} <ClassIcon class={$class.id} circle classColor invert />
    </span>
  );
};
