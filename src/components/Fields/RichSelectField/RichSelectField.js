import React from 'react';
import { Field } from 'redux-form';

import RichSelectFieldFormGroup from './RichSelectFieldFormGroup';
import './styles.css';

const RichSelectField = props => <Field {...props} component={RichSelectFieldFormGroup} />;

export default RichSelectField;
