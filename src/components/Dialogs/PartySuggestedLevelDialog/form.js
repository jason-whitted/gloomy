import { errors } from '../../../common';

const form = 'party-suggested-level';

const initialValues = {
  characters: [],
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};
