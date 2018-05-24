import React, { Fragment } from 'react';

import Augments from './Augments';

export default props => {
  const { action: { augments }, card: { augmentSlots: slots } = {} } = props;
  if (!augments || !augments.length || !slots) return null;

  return (
    <Fragment>
      {augments.map(id => slots[id]).map(augment => {
        const Augment = Augments[augment.type];
        return <Augment key={augment.id} {...props} augment={augment} />;
      })}
    </Fragment>
  );
};
