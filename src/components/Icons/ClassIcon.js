import React from 'react';

import { CLASS_CONFIG } from '../../constants';
import * as CLASS from './class';
import './styles.css';

const Noop = () => null;

export default ({ class: id, ...props }) => {
  const Class = CLASS[id.id || id] || Noop;
  return <Class {...props} class={CLASS_CONFIG[id.id || id]} />;
};
