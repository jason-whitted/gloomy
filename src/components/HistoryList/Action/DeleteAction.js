import React from 'react';

export default ({ campaign, action }) => {
  const { payload: { id } } = action;
  return <span>Deleted action {id}</span>;
};
