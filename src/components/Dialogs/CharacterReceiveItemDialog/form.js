import { errors } from '../../../common';

const form = 'character-receive-item';

const initialValues = {
  search: '',
  item: 0,
};

const validate = ({ item, search }) =>
  errors({
    search: !search ? 'Required' : !item ? 'Invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
