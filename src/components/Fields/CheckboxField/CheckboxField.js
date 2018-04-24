import React from 'react';
import { Field } from 'redux-form';

import CheckboxFieldFormGroup from './CheckboxFieldFormGroup';
import './styles.css';

const CheckboxField = props => <Field {...props} component={CheckboxFieldFormGroup} />;

export default CheckboxField;
