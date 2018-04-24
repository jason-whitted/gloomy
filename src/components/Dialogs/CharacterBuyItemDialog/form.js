import { ITEM_CONFIG } from '../../../constants';
import { errors } from '../../../common';

const form = 'character-buy-item';

const initialValues = {
  gold: 0,
  discount: 0,
  item: '',
};

const validate = ({ gold, discount, item }) =>
  errors({
    item: !item ? 'Required' : ITEM_CONFIG[item].gold + discount > gold ? 'Too expensive' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
