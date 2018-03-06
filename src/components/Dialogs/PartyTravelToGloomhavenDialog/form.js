import { errors } from '../../../common';

const form = 'party-travel-to-gloomhaven';

const initialValues = {
  skip: '',
  cityEvent: '',
  eventStatus: '',
  cityEvents: [],
};

const includes = (arr, val) => arr.includes(parseInt(val, 10));

const validate = ({ skip, cityEvent, eventStatus, cityEvents }) =>
  errors({
    // prettier-ignore
    cityEvent: skip ? ''
      : !cityEvent ? 'Required'
      : isNaN(cityEvent) ? 'Invalid'
      : !includes(cityEvents, cityEvent) ? 'Not available'
      : '',
    eventStatus: skip ? '' : !eventStatus ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
