import { errors } from '../../../../common';

const form = 'campaign-builder-parties';

const initialValues = {
  partyCount: 1,
  parties: [],
};

const validate = ({ partyCount, parties }) =>
  errors({
    partyCount: !partyCount ? 'Required' : isNaN(partyCount) ? 'Invalid' : '',
    parties: parties.slice(0, partyCount).map(p => (!p ? 'Required' : '')),
  });

export default {
  form,
  initialValues,
  validate,
};
