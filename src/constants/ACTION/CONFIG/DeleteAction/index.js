import ID from '../../ID';
import create from './create';
import reduce from './reduce';

export default {
  id: ID.DELETE_ACTION,
  name: 'Delete Action',
  create,
  reduce,
};
