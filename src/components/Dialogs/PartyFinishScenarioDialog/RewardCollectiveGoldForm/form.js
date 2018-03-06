import { errors } from '../../../../common';

const form = 'reward-collectivegold';

const initialValues = {
  characters: {},
  goal: 0,
};

const validate = ({ characters, goal }) => {
  const entries = Object.entries(characters || {});
  const total = entries.reduce((t, [k, v]) => (t += parseInt(v, 10) || 0), 0);
  return errors({
    goal: total !== goal ? 'Invalid' : '',
  });
};

export default {
  form,
  initialValues,
  validate,
};
