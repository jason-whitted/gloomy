import React from 'react';
import classNames from 'classnames';

import { Convert } from '../../../common';

const XP = [0, 45, 95, 150, 210, 275, 345, 420, 500];

export default props => {
  const { character } = props;

  const levelClassName = i => classNames({ 'border bg-success': i + 1 === character.level });
  const xpClassName = i =>
    classNames({
      'border bg-success': i + 1 === Convert.xpToLevel(character.xp),
    });

  const maxLevel = character.level === 9;
  const levelUp = character.levelUp && !maxLevel;

  return (
    <table className="table table-sm table-striped table-dark m-0 small text-center">
      <tbody>
        <tr>
          <th>Level</th>
          {XP.map((xp, i) => (
            <td key={xp} className={levelClassName(i)}>
              {i + 1}
            </td>
          ))}
        </tr>
        <tr>
          <th>XP</th>
          {XP.map((xp, i) => (
            <td key={xp} className={xpClassName(i)}>
              {xp}
            </td>
          ))}
        </tr>
        {!maxLevel &&
          levelUp &&
          !character.party.location.gloomhaven && (
            <tr>
              <td className="text-center" colSpan="10">
                Return to Gloomhaven to level up!
              </td>
            </tr>
          )}
        {!maxLevel &&
          !levelUp && (
            <tr>
              <td className="text-center" colSpan="10">
                Level up in {XP[character.level] - character.xp} xp
              </td>
            </tr>
          )}
      </tbody>
    </table>
  );
};
