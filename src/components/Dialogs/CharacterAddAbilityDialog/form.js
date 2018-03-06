import { errors } from '../../../common';

const form = 'character-add-ability';

const initialValues = {
  ability: '',
};

const validate = ({ ability }) =>
  errors({
    ability: !ability ? 'Required' : isNaN(ability) ? 'invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
