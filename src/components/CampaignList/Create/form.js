import LZUTF8 from 'lzutf8';

import { errors } from '../../../common';

const form = 'create-campaign';

const initialValues = {
  name: '',
};

const validate = ({ name, build }) => {
  const result = {
    name: !name ? 'Required' : '',
  };

  try {
    JSON.parse(LZUTF8.decompress(build.replace(/\s/g, ''), { inputEncoding: 'Base64' }));
  } catch (e) {
    result.build = 'Invalid';
  }

  return errors(result);
};

export default {
  form,
  initialValues,
  validate,
};
