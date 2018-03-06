import { errors } from '../../../../common';

const form = 'reward-item-2x';

const initialValues = {
  character1: '',
  character2: '',
};

const validate = ({ character1, character2 }) =>
  errors({
    character1: !character1 ? 'Required' : '',
    character2: !character2 ? 'Required' : character1 === character2 ? 'Invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
