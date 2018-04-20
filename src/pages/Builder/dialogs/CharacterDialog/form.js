import { errors } from '../../../../common';

const form = 'campaign-builder-characters';

const initialValues = {
  player: '',
  party: '',
  name: '',
  level: 1,
  quest: '',
  retired: '',
  bonusPerks: 0,
};

const validate = ({ player, party, name, level, quest, retired, bonusPerks }) =>
  errors({
    player: isNaN(player) ? 'Required' : '',
    party: isNaN(party) ? 'Required' : '',
    name: !name ? 'Required' : '',
    level: !level ? 'Required' : '',
    quest: !quest ? 'Required' : '',
    retired: !retired ? 'Required' : '',
    bonusPerks: isNaN(bonusPerks) ? 'Invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
