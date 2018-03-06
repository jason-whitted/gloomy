import { errors } from '../../../common';

const form = 'campaign-unlock-road-event';

const initialValues = {
  events: [],
  event: '',
};

const duplicate = (arr, item) => arr.some(i => i == item); // eslint-disable-line eqeqeq

const validate = ({ events, event }) =>
  errors({
    event: !event ? 'Required' : isNaN(event) ? 'Invalid' : duplicate(events, event) ? 'Already in event deck' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
