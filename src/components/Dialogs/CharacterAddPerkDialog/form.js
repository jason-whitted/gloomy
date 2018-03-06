import { errors } from '../../../common';

const form = 'character-add-perk';

const initialValues = {
  perk: '',
};

const validate = ({ perk }) =>
  errors({
    perk: !perk ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
