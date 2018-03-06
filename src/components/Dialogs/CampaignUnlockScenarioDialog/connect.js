import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import formConfig from './form';

const selectFormValues = state => getFormValues(formConfig.form)(state) || formConfig.initialValues;
const selectScenarioID = createSelector(selectFormValues, formValues => formValues.scenario);

const select = state => ({
  scenarioID: selectScenarioID(state),
});

const boundActions = {};

export default [select, boundActions];
