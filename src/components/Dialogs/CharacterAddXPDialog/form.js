import { errors } from '../../../common';

const form = 'character-add-xp';

const initialValues = {
  xp: '',
};

const validate = ({ xp }) =>
  errors({
    xp: !xp ? 'Required' : isNaN(xp) ? 'invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
