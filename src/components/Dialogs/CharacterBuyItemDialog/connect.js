import { getFormValues } from 'redux-form';

import formConfig from './form';

const select = state => ({
  formValues: getFormValues(formConfig.form)(state) || formConfig.initialValues,
});

const boundActions = {};

export default [select, boundActions];
