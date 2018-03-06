import React from 'react';
import { Field } from 'redux-form';

import TextAreaFieldFormGroup from './TextAreaFieldFormGroup';
import './styles.css';

const TextAreaField = props => <Field {...props} component={TextAreaFieldFormGroup} />;

export default TextAreaField;
