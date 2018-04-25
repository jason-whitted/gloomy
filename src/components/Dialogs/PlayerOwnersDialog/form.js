import { errors } from '../../../common';

const form = 'player-owners';

const initialValues = {
  ownerCount: 0,
  owners: [],
};

const validate = ({ ownerCount, owners }) =>
  errors({
    ownerCount: !ownerCount ? 'Required' : isNaN(ownerCount) ? 'Invalid' : '',
    owners: owners.slice(0, ownerCount).map(p => (!p ? 'Required' : '')),
  });

export default {
  form,
  initialValues,
  validate,
};
