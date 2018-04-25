import GROUP from '../GROUP/ID';
import TYPE from '../TYPE/ID';
import ID from './ID';

export default {
  [ID.NON_OWNER_PLAYER_GOLD]: {
    id: ID.NON_OWNER_PLAYER_GOLD,
    type: TYPE.VISIBILITY,
    group: GROUP.NON_OWNER_PLAYER,
    name: 'Gold',
    default: '0',
  },
  [ID.NON_OWNER_PLAYER_ITEMS]: {
    id: ID.NON_OWNER_PLAYER_ITEMS,
    type: TYPE.VISIBILITY,
    group: GROUP.NON_OWNER_PLAYER,
    name: 'Items',
    default: '0',
  },
  [ID.NON_OWNER_PLAYER_QUEST]: {
    id: ID.NON_OWNER_PLAYER_QUEST,
    type: TYPE.VISIBILITY,
    group: GROUP.NON_OWNER_PLAYER,
    name: 'Quest',
    default: '0',
  },
  [ID.NON_OWNER_PLAYER_NOTES]: {
    id: ID.NON_OWNER_PLAYER_NOTES,
    type: TYPE.VISIBILITY,
    group: GROUP.NON_OWNER_PLAYER,
    name: 'Notes',
    default: '0',
  },
};
