import { errors } from '../../../common';

const form = 'party-travel-to-campaign-scenario';

const initialValues = {
  scenario: '',
  roadEvent: '',
  eventStatus: '',
  roadEventRequired: [],
  roadEvents: [],
};

const includes = (arr, val) => arr.includes(parseInt(val, 10));

const validate = ({ scenario, roadEvent, eventStatus, roadEventRequired, roadEvents }) =>
  errors({
    scenario: !scenario ? 'Required' : '',
    // prettier-ignore
    roadEvent: !includes(roadEventRequired, scenario) ? ''
      : !roadEvent ? 'Required'
      : isNaN(roadEvent) ? 'Invalid'
      : !includes(roadEvents, roadEvent) ? 'Not available'
      : '',
    eventStatus: !includes(roadEventRequired, scenario) ? '' : !eventStatus ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};
