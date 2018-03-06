import { errors } from '../../../common';

const form = 'character-create-character';

const initialValues = {
  partiesInGloomhaven: [],
  player: '',
  party: '',
  class: '',
  name: '',
  level: '',
  quest: '',
};

const validate = ({ partiesInGloomhaven, player, party, class: $class, name, level, quest }) =>
  errors({
    player: !player ? 'Required' : '',
    party: !party ? 'Required' : !partiesInGloomhaven.includes(parseInt(party, 10)) ? 'Party not in Gloomhaven' : '',
    class: !$class ? 'Required' : '',
    name: !name ? 'Required' : '',
    level: !level ? 'Required' : '',
    quest: !quest ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
