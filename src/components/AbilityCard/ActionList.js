import React, { Fragment } from 'react';
import Action from './Action';

export default props => {
  const { actions } = props;
  return <Fragment>{actions.map((action, i) => <Action key={i} {...props} action={action} />)}</Fragment>;
};
