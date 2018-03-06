import { getFormValues } from 'redux-form';
import { createSelector } from 'reselect';

import formConfig from './form';

const selectAbilityID = createSelector(
  state => getFormValues(formConfig.form)(state) || formConfig.initialValues,
  values => values.ability,
);

const select = state => ({
  abilityID: selectAbilityID(state),
});

const boundActions = {};

export default [select, boundActions];
