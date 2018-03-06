import React from 'react';
import { Field } from 'redux-form';

import TextFieldFormGroup from './TextFieldFormGroup';
import './styles.css';

const TextField = props => <Field {...props} component={TextFieldFormGroup} />;

export default TextField;
