import { errors } from '../../../common';

const form = 'party-add-achievement';

const initialValues = {
  search: '',
  achievement: 0,
};

const validate = ({ search, achievement }) =>
  errors({
    search: !search ? 'Required' : !achievement ? 'Invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
