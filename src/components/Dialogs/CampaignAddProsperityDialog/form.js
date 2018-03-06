import { errors } from '../../../common';

const form = 'campaign-add-prosperity';

const initialValues = {
  prosperity: '',
};

const validate = ({ prosperity }) =>
  errors({
    prosperity: !prosperity ? 'Required' : isNaN(prosperity) ? 'invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
