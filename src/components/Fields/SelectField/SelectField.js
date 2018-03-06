import React from 'react';
import { Field } from 'redux-form';

import SelectFieldFormGroup from './SelectFieldFormGroup';
import './styles.css';

const SelectField = props => <Field {...props} component={SelectFieldFormGroup} />;

export default SelectField;
