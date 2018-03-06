import { errors } from '../../../common';

const form = 'character-unlock-item-design';

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
