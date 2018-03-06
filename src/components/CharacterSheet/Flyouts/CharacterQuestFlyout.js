import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { PERSONAL_QUEST } from '../../../constants';
import { Flyout } from '../../Flyout';
import { ExhaustionIcon, KillIcon } from '../../Icons';

const CharacterQuestFlyout = ({ readonly, character, onKillEnemyClick, onExhaustionClick }) => {
  if (readonly) return 'Quest';

  const killEnemy = [
    PERSONAL_QUEST.ABERRANT_SLAYER,
    PERSONAL_QUEST.FINDING_THE_CURE,
    PERSONAL_QUEST.LAWBRINGER,
    PERSONAL_QUEST.POUNDS_OF_FLESH,
    PERSONAL_QUEST.TROPHY_HUNT,
    PERSONAL_QUEST.IMPLEMENT_OF_LIGHT,
    PERSONAL_QUEST.THE_PERFECT_POISON,
    PERSONAL_QUEST.FEARLESS_STAND,
  ].includes(character.quest.id);

  const exhaustion = [PERSONAL_QUEST.A_STUDY_OF_ANATOMY, PERSONAL_QUEST.ZEALOT_OF_THE_BLOOD_GOD].includes(
    character.quest.id,
  );

  if (!killEnemy && !exhaustion) return 'Quest';

  return (
    <Flyout text="Quest">
      <ListGroup>
        {killEnemy && (
          <ListGroupItem tag="button" action onClick={onKillEnemyClick}>
            <KillIcon /> Kill Enemy&hellip;
          </ListGroupItem>
        )}
        {exhaustion && (
          <ListGroupItem tag="button" action onClick={onExhaustionClick}>
            <ExhaustionIcon /> Experience Exhaustion&hellip;
          </ListGroupItem>
        )}
      </ListGroup>
    </Flyout>
  );
};

CharacterQuestFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onKillEnemyClick: PropTypes.func.isRequired,
  onExhaustionClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterQuestFlyout.defaultProps = {
  readonly: false,
};

export default CharacterQuestFlyout;
