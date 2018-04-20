import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { PERSONAL_QUEST } from '../../../constants';
import { Flyout } from '../../Flyout';
import { ChartIcon, ExhaustionIcon, KillIcon } from '../../Icons';

const CharacterQuestFlyout = ({ readonly, character, onManualProgressClick, onKillEnemyClick, onExhaustionClick }) => {
  if (readonly) return 'Quest';

  const manual =
    character.imported &&
    [
      PERSONAL_QUEST.A_HELPING_HAND,
      PERSONAL_QUEST.ELEMENTAL_SAMPLES,
      PERSONAL_QUEST.ETERNAL_WANDERER,
      PERSONAL_QUEST.FINDING_THE_CURE,
      PERSONAL_QUEST.GOLIATH_TOPPLER,
      PERSONAL_QUEST.GREED_IS_GOOD,
      PERSONAL_QUEST.IMPLEMENT_OF_LIGHT,
      PERSONAL_QUEST.LAWBRINGER,
      PERSONAL_QUEST.PIETY_IN_ALL_THINGS,
      PERSONAL_QUEST.SEEKER_OF_XORN,
      PERSONAL_QUEST.TAKE_BACK_THE_TREES,
      PERSONAL_QUEST.THE_FALL_OF_MAN,
      PERSONAL_QUEST.THE_THIN_PLACES,
      PERSONAL_QUEST.VENGEANCE,
    ].includes(character.quest.id);

  const killEnemy =
    !manual &&
    [
      PERSONAL_QUEST.ABERRANT_SLAYER,
      PERSONAL_QUEST.FINDING_THE_CURE,
      PERSONAL_QUEST.LAWBRINGER,
      PERSONAL_QUEST.POUNDS_OF_FLESH,
      PERSONAL_QUEST.TROPHY_HUNT,
      PERSONAL_QUEST.IMPLEMENT_OF_LIGHT,
      PERSONAL_QUEST.THE_PERFECT_POISON,
      PERSONAL_QUEST.FEARLESS_STAND,
    ].includes(character.quest.id);

  const exhaustion =
    !manual && [PERSONAL_QUEST.A_STUDY_OF_ANATOMY, PERSONAL_QUEST.ZEALOT_OF_THE_BLOOD_GOD].includes(character.quest.id);

  if (!manual && !killEnemy && !exhaustion) return 'Quest';

  return (
    <Flyout text="Quest">
      <ListGroup>
        {manual && (
          <ListGroupItem tag="button" action onClick={onManualProgressClick}>
            <ChartIcon /> Manual Progress&hellip;
          </ListGroupItem>
        )}
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
  onManualProgressClick: PropTypes.func.isRequired,
  onKillEnemyClick: PropTypes.func.isRequired,
  onExhaustionClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterQuestFlyout.defaultProps = {
  readonly: false,
};

export default CharacterQuestFlyout;
