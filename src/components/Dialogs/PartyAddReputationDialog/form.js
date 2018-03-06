import { errors } from '../../../common';

const form = 'party-add-reputation';

const initialValues = {
  reputation: '',
};

const validate = ({ reputation }) =>
  errors({
    reputation: !reputation ? 'Required' : isNaN(reputation) ? 'invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
