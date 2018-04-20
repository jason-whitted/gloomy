import React from 'react';
import { Field } from 'redux-form';
import { Button } from 'reactstrap';
import classNames from 'classnames';

export default ({ envelope }) => (
  <Field
    name={envelope}
    component={({ input }) => {
      const className = classNames('rounded-0 ml-0 btn btn-sm', {
        'btn-info': input.value,
        'btn-danger': !input.value,
      });
      const title = `Envelope ${envelope}: ${input.value ? 'Complete' : 'Incomplete'}`;
      return (
        <Button
          type="button"
          className={className}
          style={{ flex: '0 0 10%' }}
          onClick={input.onChange}
          value={!input.value ? 'Complete' : ''}
          title={title}
        >
          {envelope}
        </Button>
      );
    }}
  />
);
