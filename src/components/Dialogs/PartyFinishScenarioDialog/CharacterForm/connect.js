import { getFormValues } from 'redux-form';

import { SCENARIO_STATUS } from '../../../../constants';
import resultFormConfig from '../ResultForm/form';
import getFormConfig from './form';

export default character => {
  const formConfig = getFormConfig(character);

  const select = state => ({
    attended: (getFormValues(formConfig.form)(state) || {}).attended || 'yes',
    completed: (getFormValues(resultFormConfig.form)(state) || {}).result !== SCENARIO_STATUS.AVAILABLE,
  });

  const boundActions = {};

  return [select, boundActions];
};
