import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { AUGMENT } from '../../../constants';
import { Convert } from '../../../common';
import { Flyout } from '../../Flyout';
import { AugmentIcon, ClassIcon } from '../../Icons';

const CharacterAbilitiesFlyout = ({ readonly, campaign, character, onAddAbilityClick, onAddAugmentClick }) => {
  if (readonly) return 'Abilities';

  const { gloomhaven } = character.party.location;
  const fullyAugmentedCards = character.abilityDeck.filter(
    c => c.augmentSlots && Object.values(c.augmentSlots).every(a => !a.readonly && a.type !== AUGMENT.AVAILABLE),
  ).length;
  const prosperity = Convert.prosperityToProsperityLevel(campaign.prosperity);
  const abilityUp = gloomhaven && character.abilityUp;
  const augmentUp = gloomhaven && fullyAugmentedCards < prosperity;
  if (!abilityUp && !augmentUp) return 'Abilities';

  return (
    <Flyout text="Abilities">
      <ListGroup>
        {abilityUp && (
          <ListGroupItem tag="button" action onClick={onAddAbilityClick}>
            <ClassIcon class={character.class} /> Select New Ability&hellip;
          </ListGroupItem>
        )}
        {augmentUp && (
          <ListGroupItem tag="button" action onClick={onAddAugmentClick}>
            <AugmentIcon /> Augment Ability&hellip;
          </ListGroupItem>
        )}
      </ListGroup>
    </Flyout>
  );
};

CharacterAbilitiesFlyout.propTypes = {
  readonly: PropTypes.bool,
  character: PropTypes.object.isRequired,
  onAddAbilityClick: PropTypes.func.isRequired,
  onAddAugmentClick: PropTypes.func.isRequired,
};

CharacterAbilitiesFlyout.defaultProps = {
  readonly: false,
};

export default CharacterAbilitiesFlyout;
