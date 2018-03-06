import { errors } from '../../../common';

const form = 'character-add-augment';

const initialValues = {
  ability: '',
  augment: '',
  type: '',
};

const validate = ({ ability, augment, type }) =>
  errors({
    ability: !ability ? 'Required' : '',
    augment: !augment ? 'Required' : '',
    type: !type ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
