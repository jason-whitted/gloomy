import { errors } from '../../../common';

const form = 'character-add-gold';

const initialValues = {
  gold: '',
};

const validate = ({ gold }) =>
  errors({
    gold: !gold ? 'Required' : isNaN(gold) ? 'invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
