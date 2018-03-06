import React from 'react';

import { AUGMENT_CONFIG } from '../../../constants';
import { Flyout } from '../../Flyout';
import { AugmentAvailableIcon } from '../../Icons';
import AugmentButton from './AugmentButton';

export default props => {
  const icon = <AugmentAvailableIcon />;
  if (!props.onSelectAugment) return icon;

  const { augment: slot } = props;

  return (
    <Flyout text={icon} popover={{ className: 'augments-flyout' }}>
      {Object.values(AUGMENT_CONFIG)
        .filter(a => a.enabled(slot))
        .map(a => <AugmentButton key={a.id} {...props} slot={slot} augment={a} />)}
    </Flyout>
  );
};
