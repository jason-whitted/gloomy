import { errors } from '../../../../common';

const form = 'campaign-builder-characters';

const initialValues = {
  characters: {},
};

const validate = ({ characters }) => errors({});

export default {
  form,
  initialValues,
  validate,
};
