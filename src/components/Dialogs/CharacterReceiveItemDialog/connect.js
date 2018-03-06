import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import formConfig from './form';

const selectFormValues = state => getFormValues(formConfig.form)(state) || formConfig.initialValues;
const selectItemID = createSelector(selectFormValues, formValues => formValues.item);

const select = state => ({
  itemID: selectItemID(state),
});

const boundActions = {};

export default [select, boundActions];
