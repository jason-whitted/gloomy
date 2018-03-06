import React, { Fragment } from 'react';
import classNames from 'classnames';

import { SUMMON_CONFIG } from '../../../constants';
import { SymbolIcon } from '../../Icons';
import Action from '../Action';
import AugmentList from '../AugmentList';

export default props => {
  const { action: { summon: id, style, className } } = props;

  const summon = SUMMON_CONFIG[id];
  const { name, hp, move, attack, range, bonuses } = summon;

  const altStyle = summon.className === 'summon2';

  const classes = classNames('action action-summon', className, summon.className);

  return (
    <div className={classes} style={style}>
      <div className="summon-name">
        <span className="summon-keyword">Summon</span> {name}
      </div>
      <div className="stat stat-hp">
        <SymbolIcon symbol="Heal" className="light" noText />: {hp.value || '-'}
        <AugmentList {...props} action={{ summonAction: 'hp', augments: hp.augments }} />
      </div>
      <div className="stat stat-move">
        <SymbolIcon symbol="Move" className="light" noText />: {move.value || '-'}
        <AugmentList {...props} action={{ summonAction: 'move', augments: move.augments }} />
      </div>
      <div className="stat stat-attack">
        <SymbolIcon symbol="Attack" className="light" noText />: {attack.value || '-'}
        <AugmentList {...props} action={{ summonAction: 'attack', augments: attack.augments }} />
      </div>
      <div className="stat stat-range">
        <SymbolIcon symbol="Range" className="light" noText />: {range.value || '-'}
        <AugmentList {...props} action={{ summonAction: 'range', augments: range.augments }} />
      </div>
      {!altStyle && (
        <section className="effects">
          <div className="effects-inner">
            {bonuses && bonuses.map((bonus, i) => <Action key={i} {...bonus} isBonus />)}
          </div>
        </section>
      )}
      {altStyle && (
        <Fragment>
          <section className="effects">
            <div className="effects-inner">{bonuses && <Action {...bonuses[0]} isBonus />}</div>
          </section>
          <section className="effects">
            <div className="effects-inner">{bonuses && <Action {...bonuses[1]} isBonus />}</div>
          </section>
        </Fragment>
      )}
    </div>
  );
};
