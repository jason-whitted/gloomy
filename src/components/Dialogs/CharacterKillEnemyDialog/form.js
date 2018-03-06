import { errors } from '../../../common';

const form = 'character-kill-enemy';

const initialValues = {
  enemy: '',
  count: '1',
  elite: 'normal',
};

const validate = ({ enemy, count, elite }) =>
  errors({
    enemy: !enemy ? 'Required' : '',
    count: !count ? 'Required' : isNaN(count) ? 'invalid' : '',
    elite: '',
  });

export default {
  form,
  initialValues,
  validate,
};
