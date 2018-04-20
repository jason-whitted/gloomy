import { errors } from '../../common';
import createBuild from './createBuild';

const form = 'campaign-builder';

const initialValues = {
  build: createBuild(),
  base64: '',
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};
