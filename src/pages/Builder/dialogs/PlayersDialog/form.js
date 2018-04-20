import { errors } from '../../../../common';

const form = 'campaign-builder-players';

const initialValues = {
  playerCount: 1,
  players: [],
};

const validate = ({ playerCount, players }) =>
  errors({
    playerCount: !playerCount ? 'Required' : isNaN(playerCount) ? 'Invalid' : '',
    players: players.slice(0, playerCount).map(p => (!p ? 'Required' : '')),
  });

export default {
  form,
  initialValues,
  validate,
};
