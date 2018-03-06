import React from 'react';
import classNames from 'classnames';

import { SymbolIcon } from '../../Icons';
import { RichText } from '../../RichText';

export default props => {
  const { action: { text, symbols, className, style } } = props;
  const classes = classNames('action action-symbols', className);

  return (
    <div className={classes} style={style}>
      {text && (
        <div className="small">
          <RichText text={text} light />
        </div>
      )}
      {symbols.map((id, i) => <SymbolIcon key={i} symbol={id} flyout noText className="light" />)}
    </div>
  );
};
